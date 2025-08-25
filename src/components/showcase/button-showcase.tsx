import React from "react";
import { Button } from "../common/button/button";

const ButtonShowcase: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundColor: "var(--background)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Button Component Showcase - Revised
          </h1>
          <p className="text-lg opacity-80">
            Comprehensive demonstration of all button variants with integrated
            hover effects
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: "var(--primary)" }}
            />
            Filled Buttons
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                All Sizes (with hover effects)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="filled"
                  size="extra-small"
                  onClick={handleClick}
                >
                  Extra Small
                </Button>
                <Button variant="filled" size="small" onClick={handleClick}>
                  Small
                </Button>
                <Button variant="filled" size="medium" onClick={handleClick}>
                  Medium
                </Button>
                <Button variant="filled" size="large" onClick={handleClick}>
                  Large
                </Button>
                <Button
                  variant="filled"
                  size="extra-large"
                  onClick={handleClick}
                >
                  Extra Large
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                With Arrows (8px padding)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="filled"
                  size="medium"
                  arrow="left"
                  onClick={handleClick}
                >
                  Back
                </Button>
                <Button
                  variant="filled"
                  size="medium"
                  arrow="right"
                  onClick={handleClick}
                >
                  Next
                </Button>
                <Button
                  variant="filled"
                  size="medium"
                  arrow="both"
                  onClick={handleClick}
                >
                  Both Arrows
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                Disabled States
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="filled" size="medium" disabled>
                  Disabled
                </Button>
                <Button variant="filled" size="medium" arrow="right" disabled>
                  Disabled Arrow
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div
              className="w-4 h-4 rounded border-2"
              style={{ borderColor: "var(--primary)" }}
            />
            Line Buttons
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                All Sizes (with hover effects)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="line" size="extra-small" onClick={handleClick}>
                  Extra Small
                </Button>
                <Button variant="line" size="small" onClick={handleClick}>
                  Small
                </Button>
                <Button variant="line" size="medium" onClick={handleClick}>
                  Medium
                </Button>
                <Button variant="line" size="large" onClick={handleClick}>
                  Large
                </Button>
                <Button variant="line" size="extra-large" onClick={handleClick}>
                  Extra Large
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                With Arrows (8px padding)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="line"
                  size="medium"
                  arrow="left"
                  onClick={handleClick}
                >
                  Back
                </Button>
                <Button
                  variant="line"
                  size="medium"
                  arrow="right"
                  onClick={handleClick}
                >
                  Next
                </Button>
                <Button
                  variant="line"
                  size="medium"
                  arrow="both"
                  onClick={handleClick}
                >
                  Both Arrows
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                Disabled States
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="line" size="medium" disabled>
                  Disabled
                </Button>
                <Button variant="line" size="medium" arrow="right" disabled>
                  Disabled Arrow
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div
              className="w-4 h-4 rounded border"
              style={{
                borderColor: "var(--primary)",
                backgroundColor: "transparent",
              }}
            />
            Nude Buttons
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                All Sizes (with hover effects)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="nude" size="extra-small" onClick={handleClick}>
                  Extra Small
                </Button>
                <Button variant="nude" size="small" onClick={handleClick}>
                  Small
                </Button>
                <Button variant="nude" size="medium" onClick={handleClick}>
                  Medium
                </Button>
                <Button variant="nude" size="large" onClick={handleClick}>
                  Large
                </Button>
                <Button variant="nude" size="extra-large" onClick={handleClick}>
                  Extra Large
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                With Arrows (8px padding)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="nude"
                  size="medium"
                  arrow="left"
                  onClick={handleClick}
                >
                  Back
                </Button>
                <Button
                  variant="nude"
                  size="medium"
                  arrow="right"
                  onClick={handleClick}
                >
                  Next
                </Button>
                <Button
                  variant="nude"
                  size="medium"
                  arrow="both"
                  onClick={handleClick}
                >
                  Both Arrows
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                Disabled States
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="nude" size="medium" disabled>
                  Disabled
                </Button>
                <Button variant="nude" size="medium" arrow="right" disabled>
                  Disabled Arrow
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: "var(--primary)" }}
            />
            Arrow Buttons (Special Variant)
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">All Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="arrow"
                  size="extra-small"
                  arrow="right"
                  onClick={handleClick}
                >
                  Extra Small
                </Button>
                <Button
                  variant="arrow"
                  size="small"
                  arrow="left"
                  onClick={handleClick}
                >
                  Small
                </Button>
                <Button
                  variant="arrow"
                  size="medium"
                  arrow="both"
                  onClick={handleClick}
                >
                  Medium
                </Button>
                <Button
                  variant="arrow"
                  size="large"
                  arrow="right"
                  onClick={handleClick}
                >
                  Large
                </Button>
                <Button
                  variant="arrow"
                  size="extra-large"
                  arrow="left"
                  onClick={handleClick}
                >
                  Extra Large
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                Different Arrow Positions
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="arrow"
                  size="medium"
                  arrow="left"
                  onClick={handleClick}
                >
                  Left Arrow
                </Button>
                <Button
                  variant="arrow"
                  size="medium"
                  arrow="right"
                  onClick={handleClick}
                >
                  Right Arrow
                </Button>
                <Button
                  variant="arrow"
                  size="medium"
                  arrow="both"
                  onClick={handleClick}
                >
                  Both Arrows
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                Disabled States
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="arrow" size="medium" arrow="left" disabled>
                  Disabled Left
                </Button>
                <Button variant="arrow" size="medium" arrow="right" disabled>
                  Disabled Right
                </Button>
                <Button variant="arrow" size="medium" arrow="both" disabled>
                  Disabled Both
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Padding Comparison</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                Without Arrow (48px padding)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="filled" size="medium" onClick={handleClick}>
                  No Arrow Button
                </Button>
                <Button variant="line" size="medium" onClick={handleClick}>
                  Line No Arrow
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                With Arrow (8px base + 16px arrow padding)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="filled"
                  size="medium"
                  arrow="right"
                  onClick={handleClick}
                >
                  With Arrow Button
                </Button>
                <Button
                  variant="line"
                  size="medium"
                  arrow="left"
                  onClick={handleClick}
                >
                  Line With Arrow
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="p-6 rounded-lg border"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border)",
          }}
        >
          <h2 className="text-xl font-semibold mb-4">Button Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Variants:</h3>
              <ul className="space-y-1 opacity-80">
                <li>
                  • <strong>filled</strong> - Primary button with background
                </li>
                <li>
                  • <strong>line</strong> - Outlined button
                </li>
                <li>
                  • <strong>nude</strong> - Text-only button
                </li>
                <li>
                  • <strong>arrow</strong> - Special arrow button variant
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Padding Rules:</h3>
              <ul className="space-y-1 opacity-80">
                <li>
                  • <strong>No arrow:</strong> 48px horizontal padding
                </li>
                <li>
                  • <strong>With arrow:</strong> 8px base + 16px arrow side
                </li>
                <li>
                  • <strong>Hover effects:</strong> Integrated in all variants
                </li>
                <li>
                  • <strong>Disabled states:</strong> Automatic styling
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonShowcase;
