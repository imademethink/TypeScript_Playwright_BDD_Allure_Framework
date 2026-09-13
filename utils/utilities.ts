import { Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export async function wait_util(milliseconds: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
}

export async function takeScreenshot(page: Page,fileName: string): Promise<void> {

    const screenshotFolder = path.join(process.cwd(), "screenshots");
    if (!fs.existsSync(screenshotFolder)) {
        fs.mkdirSync(screenshotFolder, { recursive: true });
    }
    const filePath = path.join(screenshotFolder, `${fileName}.png`);
    await page.screenshot({path: filePath,fullPage: true});

    console.log(`Screenshot saved: ${filePath}`);
}

export function readTextFile(filePath: string): string {
    return fs.readFileSync(filePath, "utf-8");
}

export function writeTextFile(filePath: string, content: string): void {
    fs.writeFileSync(filePath, content, "utf-8");
}

export function getCurrentDate(): string {
    const date = new Date();
    return date.toISOString().split("T")[0];
}

export function getCurrentDateTime(): string {
    const date = new Date();
    return date.toISOString();
}

export function getTimestamp(): number {
    return Date.now();
}

export function generateRandomString(length: number): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex =
            Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

export function generateRandomNumber(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export function generateRandomEmail(): string {
    return `test${Date.now()}@example.com`;
}

export function getEnvironmentValue(variableName: string): string {
    const value = process.env[variableName];
    if (!value) {
        throw new Error(`Environment variable '${variableName}' is not defined.`);
    }
    return value;
}


export function readJsonFile(filePath: string): any {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
}

export function writeJsonFile(filePath: string, data: any): void {
    const jsonContent = JSON.stringify(data, null,4);
    fs.writeFileSync(filePath,jsonContent,"utf-8");
}

export function isEmpty(value: string): boolean {
    return value.trim().length === 0;
}

export function removeSpaces(value: string): string {
    return value.replace(/\s+/g, "");
}

export function convertToUpperCase(value: string): string {
    return value.toUpperCase();
}

export function convertToLowerCase(value: string): string {
    return value.toLowerCase();
}

export function logInfo(message: string): void {
    console.log(`[INFO] ${message}`);
}

export function logWarning(message: string): void {
    console.warn(`[WARNING] ${message}`);
}

export function logError(message: string): void {
    console.error(`[ERROR] ${message}`);
}

export function logDebug(message: string): void {
    console.debug(`[DEBUG] ${message}`);
}

export async function attachScreenshotToAllure(page: Page, fileName: string): Promise<void> {
    const screenshot = await page.screenshot({fullPage: true});

    // Allure attachment is handled by the BDD/Allure integration.
    // The screenshot buffer can be attached through the framework's
    // Allure attachment mechanism.

    console.log(`Allure screenshot captured: ${fileName}`);
}