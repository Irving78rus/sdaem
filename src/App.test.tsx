import React from "react";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import App from "./App";
import { createFlatList } from "./redux/flatCreater";
import { getWord } from "./components/share/utils/logic";

test("get right array length", () => {
  renderWithProviders(
    expect(createFlatList(150000).length).toBe(150000)
    );
});

test("get right word", () => {
  renderWithProviders(
    expect(getWord(7, "яблоко", "яблока", "яблок")).toBe("яблок")
    );
});
