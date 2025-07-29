const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

const app = express();
const upload = multer();

app.use(express.json());

app.post('/gerar-video', upload.none(), async (req, res) => {
  try {
    const { audio_url, image_url, script } = req.body;

    if (!audio_url_
