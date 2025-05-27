import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Word from "../src/games/word/word";
import { vi } from "vitest";
import { MemoryRouter, useNavigate } from "react-router-dom";

// Mock useNavigate from react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("Word component", () => {
  const navigateMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    useNavigate.mockReturnValue(navigateMock);
  });

  it("renders bone and dog initially, input is hidden", () => {
    const { container } = render(
      <MemoryRouter>
        <Word />
      </MemoryRouter>
    );

    const bone = container.querySelector(".bone");
    const dog = container.querySelector(".dog");

    expect(bone).toBeInTheDocument();
    expect(dog).toBeInTheDocument();

    const input = screen.queryByPlaceholderText("word");
    expect(input).not.toBeVisible();
  });

  it("shows input after clicking the bone", async () => {
    const { container } = render(
      <MemoryRouter>
        <Word />
      </MemoryRouter>
    );

    const bone = container.querySelector(".bone");
    fireEvent.click(bone);

    await waitFor(
      () => {
        expect(screen.getByPlaceholderText("word")).toBeVisible();
      },
      { timeout: 600 }
    );
  });

  it("navigates and alerts when correct word is entered", async () => {
    const alertMock = vi.fn();
    window.alert = alertMock;

    const { container } = render(
      <MemoryRouter>
        <Word />
      </MemoryRouter>
    );

    const bone = container.querySelector(".bone");
    fireEvent.click(bone);

    const input = await screen.findByPlaceholderText("word");
    fireEvent.change(input, { target: { value: "dog" } });

    await waitFor(
      () => {
        expect(alertMock).toHaveBeenCalledWith("you won");
        expect(navigateMock).toHaveBeenCalledWith("/winner");
      },
      { timeout: 600 }
    );
  });
});
