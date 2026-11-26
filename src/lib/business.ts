// One source for public contact information and the confirmed evening schedule.
export const business = {
  bookingUrl: 'https://calendly.com/sagedevs-info',
  email: 'info@sagedevs.tech',
  telephone: '+923259684493',
  whatsappUrl: 'https://wa.me/923259684493',
  hours: {
    days: 'Monday–Saturday evenings',
    range: '6:00 PM – 2:00 AM PKT',
    timezone: 'Pakistan Standard Time',
    timeZoneId: 'Asia/Karachi',
    displayDays: 'Monday–Saturday',
    usTimezone: 'US Eastern Time',
    usTimeZoneId: 'America/New_York',
    usStandardRange: '8:00 AM – 4:00 PM EST',
    usDaylightRange: '9:00 AM – 5:00 PM EDT',
    note: 'Each shift ends the following morning. The Saturday shift ends on Sunday at 2:00 AM; Sunday evening is closed.',
    consultationSlots: ['06:00 PM','07:00 PM','08:00 PM','09:00 PM','10:00 PM','11:00 PM','12:00 AM (next day)','01:00 AM (next day)'],
    opens: '18:00',
    closes: '02:00',
    startDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
} as const;

export const businessHoursAnswer = `Our team works ${business.hours.displayDays}, ${business.hours.usStandardRange} (${business.hours.usTimezone}). During daylight saving time, that is ${business.hours.usDaylightRange}. You can send an inquiry at any time; the team responds during working hours.`;

export function usBusinessHours(date: Date): string {
  const day = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()] as const;
  const formatter = new Intl.DateTimeFormat('en-US', { timeZone: business.hours.usTimeZoneId, hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });
  const start = formatter.formatToParts(new Date(Date.UTC(...day, 13)));
  const end = formatter.formatToParts(new Date(Date.UTC(...day, 21)));
  const clock = (parts: Intl.DateTimeFormatPart[]) => parts.filter(part => part.type !== 'timeZoneName').map(part => part.value).join('').trim().replace(/\s+/g, ' ');
  return `${clock(start)} – ${clock(end)} ${end.find(part => part.type === 'timeZoneName')?.value}`;
}

// Schema.org assigns an overnight shift to the day on which it opens.
export const openingHoursSpecification = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: business.hours.startDays.map(day => `https://schema.org/${day}`),
  opens: business.hours.opens,
  closes: business.hours.closes,
};
