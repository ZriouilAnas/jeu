import { render, fireEvent, screen } from "@testing-library/react";

import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Case from "../src/games/case/case";

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("Case component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("allows only digits and max 4 characters", () => {
    renderWithRouter(<Case />);
    const input = screen.getByPlaceholderText("Type the secret...");

    fireEvent.change(input, { target: { value: "12ab" } });
    expect(input.value).toBe(""); // only digits allowed, and filtered

    fireEvent.change(input, { target: { value: "12345" } });
    expect(input.value).toBe("1234"); // max 4 digits
  });

  it("alerts success when input matches the secret", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    renderWithRouter(<Case />);

    const input = screen.getByPlaceholderText("Type the secret...");
    const button = screen.getByText("CLICK ME");

    fireEvent.change(input, { target: { value: "1234" } });
    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith("You won!");
  });

  it("alerts failure when input is incorrect", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    renderWithRouter(<Case />);

    const input = screen.getByPlaceholderText("Type the secret...");
    const button = screen.getByText("CLICK ME");

    fireEvent.change(input, { target: { value: "0000" } });
    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith(expect.stringContaining("❌"));
  });

  it("alerts if input is not 4 digits", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    renderWithRouter(<Case />);

    const input = screen.getByPlaceholderText("Type the secret...");
    const button = screen.getByText("CLICK ME");

    fireEvent.change(input, { target: { value: "12" } });
    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith("Please enter a 4-digit code.");
  });
});
