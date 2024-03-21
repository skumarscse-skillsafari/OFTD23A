import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Demo from "./Demo";

describe("test add product page", () => {
  jest.mock("axios", () => ({
    __esModule: true,

    default: {
      get: () => ({
        data: {
          id: 1,
          title: "title",
          description: "description",
          price: 10,
        },
      }),
    },
  }));

  test("product title element should be rendered", () => {
    render(<Demo />);
    const productTitleEle = screen.getByPlaceholderText(/product title/i);
    expect(productTitleEle).toBeInTheDocument();
  });

  test("product description should be rendered", () => {
    render(<Demo />);
    const productDescEle = screen.getByPlaceholderText(/product description/i);
    expect(productDescEle).toBeInTheDocument();
  });

  test("product price should be rendered", () => {
    render(<Demo />);
    const productPriceEle = screen.getByPlaceholderText(/product price/i);
    expect(productPriceEle).toBeInTheDocument();
  });

  test("button element should be rendered", () => {
    render(<Demo />);
    const buttonEle = screen.getByRole("button");
    expect(buttonEle).toBeInTheDocument();
  });

  test("product title value should be empty", () => {
    render(<Demo />);
    const productTitleEle = screen.getByPlaceholderText(/product title/i);
    expect(productTitleEle.value).toBe("");
  });

  test("product description value should be empty", () => {
    render(<Demo />);
    const productDescEle = screen.getByPlaceholderText(/product description/i);
    expect(productDescEle.value).toBe("");
  });

  test("product price value should be empty", () => {
    render(<Demo />);
    const productPriceEle = screen.getByPlaceholderText(/product price/i);
    expect(productPriceEle.value).toBe("");
  });

  test("button element should be disabled", () => {
    render(<Demo />);
    const buttonEle = screen.getByRole("button");
    expect(buttonEle).toBeDisabled();
  });

  test("button text should not be please wait", () => {
    render(<Demo />);
    const buttonEle = screen.getByRole("button");
    expect(buttonEle).not.toHaveTextContent(/please wait/i);
    // expect(buttonEle).toHaveTextContent(/add product/i);
  });

  test("error message should not be visible", () => {
    render(<Demo />);
    const errorText = screen.getByTestId("error");
    expect(errorText).not.toBeVisible();
  });

  test("product title value should be title", () => {
    render(<Demo />);
    const productTitleEle = screen.getByPlaceholderText(/product title/i);
    const testValue = "title";
    fireEvent.change(productTitleEle, { target: { value: testValue } });
    expect(productTitleEle.value).toBe(testValue);
  });

  test("product description value should be description", () => {
    render(<Demo />);
    const productDescEle = screen.getByPlaceholderText(/product description/i);
    const testValue = "description";
    fireEvent.change(productDescEle, { target: { value: testValue } });
    expect(productDescEle.value).toBe(testValue);
  });

  test("product price value should be 10", () => {
    render(<Demo />);
    const productPriceEle = screen.getByPlaceholderText(/product price/i);
    const testValue = 10;
    fireEvent.change(productPriceEle, { target: { value: testValue } });
    expect(+productPriceEle.value).toBe(testValue);
  });

  test("button should not be disabled if input exists in all fields", () => {
    render(<Demo />);
    const productTitleEle = screen.getByPlaceholderText(/product title/i);
    const productDescEle = screen.getByPlaceholderText(/product description/i);
    const productPriceEle = screen.getByPlaceholderText(/product price/i);
    const buttonEle = screen.getByRole("button");
    const testTitle = "title";
    const testDesc = "description";
    const testPrice = 10;
    fireEvent.change(productTitleEle, { target: { value: testTitle } });
    fireEvent.change(productDescEle, { target: { value: testDesc } });
    fireEvent.change(productPriceEle, { target: { value: testPrice } });
    expect(buttonEle).not.toBeDisabled();
  });

  test("loading should be rendered on click", () => {
    render(<Demo />);
    const productTitleEle = screen.getByPlaceholderText(/product title/i);
    const productDescEle = screen.getByPlaceholderText(/product description/i);
    const productPriceEle = screen.getByPlaceholderText(/product price/i);
    const buttonEle = screen.getByRole("button");
    const testTitle = "title";
    const testDesc = "description";
    const testPrice = 109.95;
    fireEvent.change(productTitleEle, { target: { value: testTitle } });
    fireEvent.change(productDescEle, { target: { value: testDesc } });
    fireEvent.change(productPriceEle, { target: { value: testPrice } });
    fireEvent.click(buttonEle);
    expect(buttonEle).toHaveTextContent(/please wait/i);
  });

  test("loading should not be rendered after fetching", async () => {
    render(<Demo />);
    const productTitleEle = screen.getByPlaceholderText(/product title/i);
    const productDescEle = screen.getByPlaceholderText(/product description/i);
    const productPriceEle = screen.getByPlaceholderText(/product price/i);
    const buttonEle = screen.getByRole("button");
    const testTitle = "title";
    const testDesc = "description";
    const testPrice = 10;
    fireEvent.change(productTitleEle, { target: { value: testTitle } });
    fireEvent.change(productDescEle, { target: { value: testDesc } });
    fireEvent.change(productPriceEle, { target: { value: testPrice } });
    fireEvent.click(buttonEle);
    await waitFor(() =>
      expect(buttonEle).not.toHaveTextContent(/please wait/i)
    );
  });

  test("product title should be rendered after fetch", async () => {
    render(<Demo />);
    const productTitleEle = screen.getByPlaceholderText(/product title/i);
    const productDescEle = screen.getByPlaceholderText(/product description/i);
    const productPriceEle = screen.getByPlaceholderText(/product price/i);
    const buttonEle = screen.getByRole("button");
    const testTitle = "title";
    const testDesc = "description";
    const testPrice = 10;
    fireEvent.change(productTitleEle, { target: { value: testTitle } });
    fireEvent.change(productDescEle, { target: { value: testDesc } });
    fireEvent.change(productPriceEle, { target: { value: testPrice } });
    fireEvent.click(buttonEle);
    const productTitle = await screen.findByText(/fjallraven/i);
    expect(productTitle).toBeInTheDocument();
  });
});
