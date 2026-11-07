// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

// react-router v7 needs these, but CRA's jsdom test environment doesn't provide them.
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
