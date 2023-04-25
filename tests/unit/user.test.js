import { expect } from 'chai';
import * as UserService from '../../src/services/user.service';
import * as BookService from '../../src/services/books.service';
import * as UserController from '../../src/controllers/user.controller'
import { stub, spy } from 'sinon'

import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

describe('User', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('Get Users', () => {
    it('should return empty array', async () => {
      const result = await BookService.getAllBooks();
      console.log(result)
      expect(result).to.be.an('array');
    });
  });
  describe('user Registration', () => {
    it('should return an object', async () => {
      let body = { firstName: "Sidhodhan5", lastName: "Kambl4e", email: "sidhodhank42018@gmail.com", password: "Pass@123" }
      const result = await UserService.newUserRegistration(body);
      expect(result).to.be.an('object');
    });
  });
  describe('user login ', () => {
    it('should return genrated token', async () => {
      let body = { email: "sidhodhank42018@gmail.com", password: "Pass@123" }
      const result = await UserService.loginUser(body);
      expect(result).to.be.an('string');
    });
  });
  describe("register", function () {
    let status, json, res, userService, next
    before(() => {
      status = stub()
      json = spy();
      res = { json, status };
      next = stub()
      status.returns(res);
    });
    it("should create new user", async function () {
      const req = { body: { email: "sidhodhank25018@gmail.com", password: "Pass@1243" } };
      await UserController.newUserRegistration(req, res, next);
      expect(json.args[0][0].code).to.equal(201);
      expect(json.args[0][0].data.email).to.equal("sidhodhank25018@gmail.com")
    });
    it("should login", async function () {
      const req = { body: { email: "sidhodhank25018@gmail.com", password: "Pass@1243" } };
      await UserController.loginUser(req, res, next);
      expect(json.args[0][0].code).to.equal(201);
    });

  });
});
