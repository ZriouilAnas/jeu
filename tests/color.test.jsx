import { render, screen, fireEvent } from "@testing-library/react";

import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Color from "../src/games/color/color";

// Helper to render with routing context
const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("Color component", () => {
  beforeEach(() => {
    vi.stubGlobal("alert", vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders color buttons", () => {
    renderWithRouter(<Color />);
    expect(screen.getByText("Add Red")).toBeInTheDocument();
    expect(screen.getByText("Add Green")).toBeInTheDocument();
    expect(screen.getByText("Add Blue")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("CHECK")).toBeInTheDocument();
  });

  it("adds up to 3 colors", () => {
    renderWithRouter(<Color />);
    fireEvent.click(screen.getByText("Add Red"));
    fireEvent.click(screen.getByText("Add Green"));
    fireEvent.click(screen.getByText("Add Blue"));

    const boxes = screen.getAllByRole("presentation");
    expect(boxes.length).toBe(3);
  });

  it("does not add more than 3 colors", () => {
    renderWithRouter(<Color />);
    fireEvent.click(screen.getByText("Add Red"));
    fireEvent.click(screen.getByText("Add Green"));
    fireEvent.click(screen.getByText("Add Blue"));
    fireEvent.click(screen.getByText("Add Red")); // Extra click

    const boxes = screen.getAllByRole("presentation");
    expect(boxes.length).toBe(3);
  });

  it("shows alert when colors match (win)", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    renderWithRouter(<Color />);
    fireEvent.click(screen.getByText("Add Red"));
    fireEvent.click(screen.getByText("Add Blue"));
    fireEvent.click(screen.getByText("Add Green"));
    fireEvent.click(screen.getByText("CHECK"));
    expect(alertMock).toHaveBeenCalledWith("you won");
    alertMock.mockRestore();
  });

  it("shows alert when colors do not match (lose)", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    renderWithRouter(<Color />);
    fireEvent.click(screen.getByText("Add Green"));
    fireEvent.click(screen.getByText("Add Blue"));
    fireEvent.click(screen.getByText("Add Red"));
    fireEvent.click(screen.getByText("CHECK"));
    expect(alertMock).toHaveBeenCalledWith("you lose");
    alertMock.mockRestore();
  });

  it("resets colors", () => {
    renderWithRouter(<Color />);
    fireEvent.click(screen.getByText("Add Red"));
    fireEvent.click(screen.getByText("Add Blue"));
    fireEvent.click(screen.getByText("Reset"));
    const boxes = screen.queryAllByRole("presentation");
    expect(boxes.length).toBe(0);
  });
});
