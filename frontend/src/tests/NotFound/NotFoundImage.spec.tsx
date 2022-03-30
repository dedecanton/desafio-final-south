import { render, screen } from "@testing-library/react";
import NotFoundImage from "../../pages/NotFound/NotFoundImage";
import * as React from "react";

describe("NotFoundImage tests", () => {
  test("should show NotFoundImage", () => {
    render(<NotFoundImage />);
    expect(screen.getByTestId("notFoundImg")).toBeVisible();
  });
});
