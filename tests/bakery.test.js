const request = require("supertest");
const app = require("../server"); // Note: ensure this points to your express app export

/**
 * Unit Testing for DulezzuaBakery Management System
 * These tests verify that the main API endpoints are operational.
 */
describe("Bakery API Integration Tests", () => {
  // Test 1: Inventory Collection
  test("GET /inventory should return a 200 status code and inventory list", async () => {
    const response = await request(app).get("/inventory");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    // Ensuring the response is an array of products
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test 2: Orders Collection
  test("GET /orders should successfully retrieve customer orders", async () => {
    const response = await request(app).get("/orders");
    expect(response.statusCode).toEqual(200);
    // Checking for standard JSON response
    expect(response.type).toBe("application/json");
  });

  // Test 3: Supplies Collection
  test("GET /supplies should fetch raw materials data correctly", async () => {
    const response = await request(app).get("/supplies");
    expect(response.status).toBe(200);
    console.log("Supplies endpoint is working as expected");
  });

  // Test 4: Employees Collection
  test("GET /employees should return the employee staff information", async () => {
    const response = await request(app).get("/employees");
    expect(response.status).toBe(200);
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty("firstName");
    }
  });
});
