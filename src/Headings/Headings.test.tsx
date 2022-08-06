import { H1 } from "./Headings"
import { screen, render } from "@testing-library/react";
import { describe, expect } from 'vitest';

describe('Headings', () => {
    it('should render the heading', () => {
        render(<H1>Main heading</H1>);

        expect(screen.getByRole('heading', { level: 1, name: 'Main heading' })).toBeInTheDocument();
    })
})