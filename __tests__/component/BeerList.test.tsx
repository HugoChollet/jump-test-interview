import { fireEvent, render, screen } from "@testing-library/react";
import { BeerList } from "@/component/BeerList/BeerList.component";

const mockButtonFunction = jest.fn();

describe("BeerList", () => {
  const mockItems = [
    { id: 1, name: "Beer 1", onPress: mockButtonFunction },
    { id: 2, name: "Beer 2" },
    { id: 3, name: "Beer 3" },
  ];

  it("renders a list of buttons with item names", () => {
    render(<BeerList items={mockItems} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(mockItems.length);
  });

  it("renders an empty list when no items are passed", () => {
    render(<BeerList items={[]} />);

    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toBe(0);
  });

  it("call the function when clicked", () => {
    render(<BeerList items={mockItems} />);

    fireEvent.click(screen.getByText("Beer 1"));
    expect(mockButtonFunction).toBeCalledTimes(1);
  });
});
