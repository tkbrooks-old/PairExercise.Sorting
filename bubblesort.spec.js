describe("Bubble Sort", function() {
  let array;
  let array2;

  beforeEach(() => {
    array = [1, 2, 3, 5, 4];
    array2 = [12, 67, 43, 89, 56, 34, 82, 94, 25];
  });

  beforeAll(function() {
    spyOn(window, "swap").and.callThrough();
  });

  it("sorting the array to call swap one time", function() {
    bubbleSort(array);
    bubbleSort(array2);
    expect(window.swap.calls.count()).toEqual(16);
  });

  // it("sorting the array to call swap one time", function() {
  //   bubbleSort(array2);
  //   expect(window.swap.calls.count()).toEqual(16);
  // });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("returns a correctly sorted array", function() {
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort(array2)).toEqual([12, 25, 34, 43, 56, 67, 82, 89, 94]);
  });
});
