// Reproducible capacity model. Decimal MB; assumed, not measured.
const days = 365.25 * 10;
const model = (loggers, interval, overhead = 200, connection = 1000, otherPerDay = 0) => {
  const publishes = loggers * 1440 / interval;
  const connections = 1440 / interval;
  return days * (16 * 1440 * loggers + 2 * publishes + overhead * publishes + connection * connections + otherPerDay) / 1e6;
};
const kLimit = (400e6 / days - 16 * 1440 * 2 - 202 * 2 * 24) / 24;
const result = {
  days, bytesPerMB: 1e6,
  payloadOnlyMB: [1, 2, 4, 8].map(n => ({ loggers: n, mb: days * 16 * 1440 * n / 1e6 })),
  dailyBudgetBytes: { full: 500e6 / days, with20PercentReserve: 400e6 / days },
  assumed: { overheadPerPublishBytes: 200, connectionBytes: 1000, otherPerDayBytes: 0 },
  scenarios: [[2,15],[2,60],[4,60],[8,60]].map(([n,i])=>({loggers:n,intervalMinutes:i,mb:model(n,i)})),
  maximumConnectionBytesForTwoLoggersHourlyAt400MB: kLimit,
  twoLoggersHourlyWith5000ByteConnectionMB: model(2,60,200,5000)
};
if (Math.abs(model(2,60) - 291.38184) > 1e-6) throw Error("Model arithmetic mismatch");
if (model(8,60) <= 500) throw Error("Eight Logger limit mismatch");
console.log(JSON.stringify(result, null, 2));

