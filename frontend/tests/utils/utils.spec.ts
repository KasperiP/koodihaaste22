import { formatOpeningHours } from "@utils/functions";

describe("formatOpeningHours", () => {
  it("format time returns correct string", () => {
    expect(formatOpeningHours("10:00-14:00")).toBe("10:00-14:00");
    expect(formatOpeningHours("10-14")).toBe("10:00-14:00");
    expect(formatOpeningHours("10:30-14")).toBe("10:30-14:00");
    expect(formatOpeningHours("11-14:55")).toBe("11:00-14:55");
    expect(formatOpeningHours("ei lounasta")).toBe("Ei tiedossa");
  });
});
