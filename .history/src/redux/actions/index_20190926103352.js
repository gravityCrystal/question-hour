// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";

export default function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}