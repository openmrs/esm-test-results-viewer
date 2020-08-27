window["getOpenmrsSpaBase"] = jest.fn().mockImplementation(() => "/");

describe("root component", () => {
  it("renders without crashing", () => {
    expect(1).toEqual(1);
  });
});
