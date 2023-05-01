import { findByText, fireEvent, render, screen } from "@testing-library/react";
import { Card } from "@/component/Card/Card.component";

const mockCard = {
  title: "Card",
  link: "Link",
  description: "Description",
};

describe("Card", () => {
  it("render a Card with title and description", () => {
    render(
      <Card
        title={mockCard.title}
        link={mockCard.link}
        description={mockCard.description}
      />
    );

    expect(screen.findByText("Card")).toBeTruthy;
    expect(screen.findByText("description")).toBeTruthy;
  });
});
