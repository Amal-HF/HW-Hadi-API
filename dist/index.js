"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({
    logger: true
});
// return user's data as  an array 
const user = ["Ali", "25", "web devoloper"];
server.route({
    method: 'GET',
    url: '/users',
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        return user;
    })
});
// return an object for Ali's profile 
const Obj = { name: "ali", job: "full-stack developer", age: "25", salary: "10000" };
server.route({
    method: 'GET',
    url: '/profile/ali',
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        return Obj;
    })
});
// return an array of instagram posts objects
const instagramPosts = [{ publisher: "norah", comments: "100", likes: "1K" }, { publisher: "amal", comments: "40", likes: "500" }, { publisher: "sara", comments: "13K", likes: "103K" }];
server.route({
    method: 'GET',
    url: '/posts',
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        return instagramPosts;
    })
});
server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    // Server is now listening on ${address}
});
