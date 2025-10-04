const fs = require('fs');
const path = require('path');

// Domains to search for
const domains = [
  'api.uifaces.co',
  'images.unsplash.com',
  'html.tailus.io',
  'wisdomcoders.us',
  'cdn.pixabay.com',
  'cdn-icons-png.flaticon.com',
  'woocommerce.com',
  's.w.org',
  'upload.wikimedia.org',
  'cdn.worldvectorlogo.com',
  'strapi.io',
  'ghost.org',
  'images.pexels.com'
];

// File extensions to search
const extensions = [
  '.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte',
  '.html', '.css', '.scss', '.sass', '.less',
  '.json', '.md', '.mdx', '.txt'
];

// Directories to skip
const skipDirs = ['node_modules', '.git', '.next', 'dist', 'build', '.nuxt', 'out'];

const results = [];

// Function to check if file should be processed
function shouldProcessFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return extensions.includes(ext);
}

// Function to check if directory should be skipped
function shouldSkipDir(dirName) {
  return skipDirs.includes(dirName);
}

// Function to search file content
function searchFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      domains.forEach(domain => {
        // Create regex to find URLs with this domain
        const regex = new RegExp(`https?://[^\\s'"]*${domain.replace(/\./g, '\\.')}[^\\s'"]*`, 'gi');
        const matches = line.match(regex);

        if (matches) {
          matches.forEach(url => {
            results.push({
              file: filePath,
              line: index + 1,
              domain: domain,
              url: url.trim(),
              lineContent: line.trim()
            });
          });
        }
      });
    });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
  }
}

// Recursive function to walk through directories
function walkDirectory(dir) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        if (!shouldSkipDir(file)) {
          walkDirectory(filePath);
        }
      } else if (stat.isFile() && shouldProcessFile(filePath)) {
        searchFile(filePath);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
}

// Main execution
console.log('🔍 Starting image URL search...\n');
console.log(`Searching in: ${process.cwd()}`);
console.log(`Looking for ${domains.length} domains in ${extensions.length} file types\n`);

const startTime = Date.now();

// Start searching from current directory
walkDirectory(process.cwd());

const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

// Display results
console.log('\n📊 SEARCH RESULTS\n');
console.log('='.repeat(80));

if (results.length === 0) {
  console.log('No images found from the specified domains.');
} else {
  // Group by domain
  const byDomain = {};
  results.forEach(result => {
    if (!byDomain[result.domain]) {
      byDomain[result.domain] = [];
    }
    byDomain[result.domain].push(result);
  });

  // Display grouped results
  Object.keys(byDomain).sort().forEach(domain => {
    console.log(`\n🌐 Domain: ${domain}`);
    console.log('-'.repeat(80));
    console.log(`Found ${byDomain[domain].length} occurrence(s)\n`);

    byDomain[domain].forEach((result, idx) => {
      console.log(`  ${idx + 1}. File: ${result.file}`);
      console.log(`     Line: ${result.line}`);
      console.log(`     URL:  ${result.url}`);
      console.log(`     Code: ${result.lineContent.substring(0, 100)}${result.lineContent.length > 100 ? '...' : ''}`);
      console.log();
    });
  });

  // Summary
  console.log('='.repeat(80));
  console.log(`\n📈 SUMMARY`);
  console.log(`   Total URLs found: ${results.length}`);
  console.log(`   Domains with matches: ${Object.keys(byDomain).length}`);
  console.log(`   Search duration: ${duration}s\n`);

  // Save to JSON file
  const outputFile = 'image-urls-report.json';
  fs.writeFileSync(
    outputFile,
    JSON.stringify({ 
      searchDate: new Date().toISOString(),
      totalResults: results.length,
      byDomain: byDomain,
      allResults: results 
    }, null, 2)
  );
  console.log(`📄 Detailed report saved to: ${outputFile}\n`);

  // Save to CSV file
  const csvFile = 'image-urls-report.csv';
  const csvContent = [
    'File,Line,Domain,URL,Code',
    ...results.map(r => 
      `"${r.file}",${r.line},"${r.domain}","${r.url}","${r.lineContent.replace(/"/g, '""')}"`
    )
  ].join('\n');
  fs.writeFileSync(csvFile, csvContent);
  console.log(`📊 CSV report saved to: ${csvFile}\n`);
}

console.log('✅ Search complete!');