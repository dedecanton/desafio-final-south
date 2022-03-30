import { render, screen } from "@testing-library/react";
import NotAuthorized from "../../pages/NotAuthorized/NotAuthorizedImage";
import * as React from "react";

describe("NotAuthorized tests", () => {
  test("should show NotAuthorized", () => {
    render(<NotAuthorized />);
    expect(screen.getByTestId("notAuthImg")).toBeVisible();
  });
});
