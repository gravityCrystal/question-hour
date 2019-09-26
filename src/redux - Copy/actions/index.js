// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/actionTypes";

export default function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}