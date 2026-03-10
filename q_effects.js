/* Text effects - 100+ real effects for Sparkle Text Lab */
(function (window) {
  var TEXT_STYLES = [
    { v: "default", g: "Base", l: "Default" },
    { v: "glitch_rgb", g: "Glitch", l: "RGB Split" },
    { v: "glitch_chromatic", g: "Glitch", l: "Chromatic Aberration" },
    { v: "glitch_horizontal", g: "Glitch", l: "Horizontal Jitter" },
    { v: "glitch_scanlines", g: "Glitch", l: "Scanlines" },
    { v: "glitch_block", g: "Glitch", l: "Block Displace" },
    { v: "glitch_slice", g: "Glitch", l: "Slice Offset" },
    { v: "glitch_noise", g: "Glitch", l: "Noise Overlay" },
    { v: "glitch_vhs", g: "Glitch", l: "VHS Distortion" },
    { v: "glitch_static", g: "Glitch", l: "Static" },
    { v: "glitch_double", g: "Glitch", l: "Double Vision" },
    { v: "glitch_pixel", g: "Glitch", l: "Pixelate" },
    { v: "neon_white", g: "Neon", l: "White Neon" },
    { v: "neon_cyan", g: "Neon", l: "Cyan Neon" },
    { v: "neon_magenta", g: "Neon", l: "Magenta Neon" },
    { v: "neon_green", g: "Neon", l: "Green Neon" },
    { v: "neon_red", g: "Neon", l: "Red Neon" },
    { v: "neon_blue", g: "Neon", l: "Blue Neon" },
    { v: "neon_yellow", g: "Neon", l: "Yellow Neon" },
    { v: "neon_orange", g: "Neon", l: "Orange Neon" },
    { v: "neon_pink", g: "Neon", l: "Pink Neon" },
    { v: "neon_double", g: "Neon", l: "Double Glow" },
    { v: "neon_triple", g: "Neon", l: "Triple Glow" },
    { v: "neon_tube", g: "Neon", l: "Tube Style" },
    { v: "neon_soft", g: "Neon", l: "Soft Glow" },
    { v: "neon_hard", g: "Neon", l: "Hard Edge" },
    { v: "chrome_silver", g: "Chrome", l: "Silver Chrome" },
    { v: "chrome_gold", g: "Chrome", l: "Gold Chrome" },
    { v: "chrome_rose", g: "Chrome", l: "Rose Gold" },
    { v: "chrome_bronze", g: "Chrome", l: "Bronze" },
    { v: "chrome_copper", g: "Chrome", l: "Copper" },
    { v: "chrome_polished", g: "Chrome", l: "Polished Metal" },
    { v: "chrome_brushed", g: "Chrome", l: "Brushed Metal" },
    { v: "chrome_reflective", g: "Chrome", l: "Reflective" },
    { v: "chrome_rainbow", g: "Chrome", l: "Rainbow Chrome" },
    { v: "shadow_drop", g: "Shadow", l: "Drop Shadow" },
    { v: "shadow_long", g: "Shadow", l: "Long Shadow" },
    { v: "shadow_soft", g: "Shadow", l: "Soft Shadow" },
    { v: "shadow_hard", g: "Shadow", l: "Hard Shadow" },
    { v: "shadow_multiple", g: "Shadow", l: "Multiple Shadows" },
    { v: "shadow_inner", g: "Shadow", l: "Inner Shadow" },
    { v: "shadow_deep", g: "Shadow", l: "Deep Shadow" },
    { v: "shadow_neon", g: "Shadow", l: "Neon Shadow" },
    { v: "outline_thick", g: "Outline", l: "Thick Outline" },
    { v: "outline_thin", g: "Outline", l: "Thin Outline" },
    { v: "outline_double", g: "Outline", l: "Double Outline" },
    { v: "outline_dotted", g: "Outline", l: "Dotted Outline" },
    { v: "outline_dashed", g: "Outline", l: "Dashed Outline" },
    { v: "outline_hollow", g: "Outline", l: "Hollow (Outline Only)" },
    { v: "outline_gradient", g: "Outline", l: "Gradient Outline" },
    { v: "outline_neon", g: "Outline", l: "Neon Outline" },
    { v: "extrude_3d", g: "3D", l: "3D Extrude" },
    { v: "extrude_stack", g: "3D", l: "Stacked 3D" },
    { v: "emboss", g: "3D", l: "Emboss" },
    { v: "engrave", g: "3D", l: "Engrave" },
    { v: "bevel", g: "3D", l: "Bevel" },
    { v: "depth_3d", g: "3D", l: "Depth" },
    { v: "perspective_3d", g: "3D", l: "Perspective" },
    { v: "rainbow", g: "Color", l: "Rainbow" },
    { v: "fire", g: "Color", l: "Fire Gradient" },
    { v: "ice", g: "Color", l: "Ice" },
    { v: "ocean", g: "Color", l: "Ocean" },
    { v: "sunset", g: "Color", l: "Sunset" },
    { v: "forest", g: "Color", l: "Forest" },
    { v: "candy", g: "Color", l: "Candy" },
    { v: "pastel", g: "Color", l: "Pastel" },
    { v: "aurora", g: "Color", l: "Aurora" },
    { v: "vaporwave", g: "Color", l: "Vaporwave" },
    { v: "cyberpunk", g: "Color", l: "Cyberpunk" },
    { v: "matrix", g: "Color", l: "Matrix Green" },
    { v: "toxic", g: "Color", l: "Toxic Green" },
    { v: "electric", g: "Color", l: "Electric Blue" },
    { v: "plasma", g: "Color", l: "Plasma" },
    { v: "holographic", g: "Color", l: "Holographic" },
    { v: "oil_slick", g: "Color", l: "Oil Slick" },
    { v: "comic", g: "Style", l: "Comic Book" },
    { v: "stencil", g: "Style", l: "Stencil" },
    { v: "graffiti", g: "Style", l: "Graffiti" },
    { v: "retro", g: "Style", l: "Retro 8-bit" },
    { v: "laser", g: "Style", l: "Laser" },
    { v: "xray", g: "Style", l: "X-Ray" },
    { v: "thermal", g: "Style", l: "Thermal" },
    { v: "ghost", g: "Style", l: "Ghost" },
    { v: "invert", g: "Style", l: "Invert" },
    { v: "frosted", g: "Style", l: "Frosted Glass" },
    { v: "shimmer", g: "Style", l: "Shimmer" },
    { v: "glow_soft", g: "Glow", l: "Soft Glow" },
    { v: "glow_hard", g: "Glow", l: "Hard Glow" },
    { v: "glow_double", g: "Glow", l: "Double Glow" },
    { v: "glow_outline", g: "Glow", l: "Outline Glow" },
    { v: "glow_pulse", g: "Glow", l: "Pulsing Glow" },
    { v: "gradient_horizon", g: "Gradient", l: "Horizon" },
    { v: "gradient_midnight", g: "Gradient", l: "Midnight" },
    { v: "gradient_peach", g: "Gradient", l: "Peach" },
    { v: "gradient_mint", g: "Gradient", l: "Mint" },
    { v: "gradient_lavender", g: "Gradient", l: "Lavender" },
    { v: "gradient_coral", g: "Gradient", l: "Coral" },
    { v: "gradient_teal", g: "Gradient", l: "Teal" },
    { v: "gradient_amber", g: "Gradient", l: "Amber" },
    { v: "gradient_cotton", g: "Gradient", l: "Cotton Candy" },
    { v: "gradient_neon", g: "Gradient", l: "Neon Gradient" },
    { v: "metallic_steel", g: "Metallic", l: "Steel" },
    { v: "metallic_copper", g: "Metallic", l: "Copper" },
    { v: "metallic_titanium", g: "Metallic", l: "Titanium" },
    { v: "metallic_platinum", g: "Metallic", l: "Platinum" },
    { v: "metallic_gunmetal", g: "Metallic", l: "Gunmetal" }
  ];

  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i) | 0; return Math.abs(h); }

  function applyTextStyle(styleId, ctx, text, opts) {
    var phase = opts.phase || 0, colors = opts.colors || [], textColor = opts.textColor || "#ffffff";
    var halfW = opts.halfW || 50, halfH = opts.halfH || 25, fontSize = opts.fontSize || 64;
    var grad = opts.grad, x0 = -halfW * 1.2, x1 = halfW * 1.2;
    var t = phase * Math.PI * 2;
    var seeded = hash(text + phase * 1000) % 1000 / 1000;

    function fillGrad() { if (grad) { ctx.fillStyle = grad; ctx.fillText(text, 0, 0); } else { ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); } }

    switch (styleId) {
      case "default":
        if (grad) { ctx.fillStyle = grad; ctx.fillText(text, 0, 0); }
        else { ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); }
        return;

      case "glitch_rgb":
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "rgba(255,0,0,0.8)"; ctx.fillText(text, -3, 0);
        ctx.fillStyle = "rgba(0,255,0,0.8)"; ctx.fillText(text, 0, 0);
        ctx.fillStyle = "rgba(0,0,255,0.8)"; ctx.fillText(text, 3, 0);
        ctx.globalCompositeOperation = "source-over";
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.9; ctx.fillText(text, 0, 0); ctx.globalAlpha = 1;
        return;
      case "glitch_chromatic":
        var o = Math.sin(t * 2) * 2;
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "rgba(255,0,0,0.9)"; ctx.fillText(text, -o - 2, 0);
        ctx.fillStyle = "rgba(0,255,255,0.9)"; ctx.fillText(text, o + 2, 0);
        ctx.globalCompositeOperation = "source-over";
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.fillText(text, 0, 0);
        return;
      case "glitch_horizontal":
        ctx.save();
        ctx.translate((seeded - 0.5) * 4, 0);
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.fillText(text, 0, 0);
        ctx.restore();
        return;
      case "glitch_scanlines": {
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.fillText(text, 0, 0);
        var cw = opts.canvasWidth || 512, ch = opts.canvasHeight || 512;
        var sx = Math.floor(cw / 2 - halfW - 20), sy = Math.floor(ch / 2 - halfH - 20);
        var sw = Math.ceil(halfW * 2 + 40), sh = Math.ceil(halfH * 2 + 40);
        sx = Math.max(0, sx); sy = Math.max(0, sy); sw = Math.min(cw - sx, sw); sh = Math.min(ch - sy, sh);
        if (sw > 0 && sh > 0) {
          var id = ctx.getImageData(sx, sy, sw, sh);
          for (var i = 0; i < id.data.length; i += 4) { if (Math.floor((i / 4) / sw) % 2 === 0) id.data[i + 3] *= 0.7; }
          ctx.putImageData(id, sx, sy);
        }
        return;
      }
      case "glitch_block":
        ctx.save();
        var b = Math.floor(seeded * 3) - 1;
        ctx.translate(b * 4, (hash(text + "b") % 3 - 1) * 2);
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.fillText(text, 0, 0);
        ctx.restore();
        return;
      case "glitch_slice":
        ctx.save();
        ctx.translate(0, Math.sin(t + halfW * 0.1) * 3);
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.fillText(text, 0, 0);
        ctx.restore();
        return;
      case "glitch_noise": {
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.95; ctx.fillText(text, 0, 0); ctx.globalAlpha = 1;
        var cw2 = opts.canvasWidth || 512, ch2 = opts.canvasHeight || 512;
        var sx2 = Math.floor(cw2 / 2 - halfW - 20), sy2 = Math.floor(ch2 / 2 - halfH - 20);
        var sw2 = Math.ceil(halfW * 2 + 40), sh2 = Math.ceil(halfH * 2 + 40);
        sx2 = Math.max(0, sx2); sy2 = Math.max(0, sy2); sw2 = Math.min(cw2 - sx2, sw2); sh2 = Math.min(ch2 - sy2, sh2);
        if (sw2 > 0 && sh2 > 0) {
          var id2 = ctx.getImageData(sx2, sy2, sw2, sh2);
          for (var j = 0; j < id2.data.length; j += 4) {
            if (id2.data[j + 3] > 10) id2.data[j + 3] = Math.min(255, Math.max(0, id2.data[j + 3] + (hash(j + phase * 1000) % 40 - 20)));
          }
          ctx.putImageData(id2, sx2, sy2);
        }
        return;
      }
      case "glitch_vhs":
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "rgba(255,0,0,0.6)"; ctx.fillText(text, -2, -1);
        ctx.fillStyle = "rgba(0,255,255,0.6)"; ctx.fillText(text, 2, 1);
        ctx.globalCompositeOperation = "source-over";
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.fillText(text, 0, 0);
        return;
      case "glitch_static":
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.7 + seeded * 0.3; ctx.fillText(text, 0, 0); ctx.globalAlpha = 1;
        return;
      case "glitch_double":
        ctx.globalAlpha = 0.5; ctx.translate(-2, 0); fillGrad(); ctx.translate(4, 0); fillGrad(); ctx.translate(-2, 0); ctx.globalAlpha = 1;
        ctx.globalAlpha = 0.8; fillGrad(); ctx.globalAlpha = 1;
        return;
      case "glitch_pixel": {
        if (grad) ctx.fillStyle = grad; else ctx.fillStyle = textColor;
        ctx.fillText(text, 0, 0);
        var cw3 = opts.canvasWidth || 512, ch3 = opts.canvasHeight || 512;
        var sx3 = Math.floor(cw3 / 2 - halfW - 20), sy3 = Math.floor(ch3 / 2 - halfH - 20);
        var sw3 = Math.ceil(halfW * 2 + 40), sh3 = Math.ceil(halfH * 2 + 40);
        sx3 = Math.max(0, sx3); sy3 = Math.max(0, sy3); sw3 = Math.min(cw3 - sx3, sw3); sh3 = Math.min(ch3 - sy3, sh3);
        if (sw3 > 0 && sh3 > 0) {
          var px = 4;
          var id3 = ctx.getImageData(sx3, sy3, sw3, sh3);
          for (var y = 0; y < id3.height; y += px) for (var x = 0; x < id3.width; x += px) {
            var idx = (y * id3.width + x) * 4;
            for (var yy = 0; yy < px && y + yy < id3.height; yy++) for (var xx = 0; xx < px && x + xx < id3.width; xx++) {
              var i2 = ((y + yy) * id3.width + (x + xx)) * 4;
              id3.data[i2] = id3.data[idx]; id3.data[i2 + 1] = id3.data[idx + 1]; id3.data[i2 + 2] = id3.data[idx + 2]; id3.data[i2 + 3] = id3.data[idx + 3];
            }
          }
          ctx.putImageData(id3, sx3, sy3);
        }
        return;
      }

      case "neon_white": case "neon_cyan": case "neon_magenta": case "neon_green": case "neon_red": case "neon_blue": case "neon_yellow": case "neon_orange": case "neon_pink": {
        var neonColors = { neon_white:"#fff", neon_cyan:"#0ff", neon_magenta:"#f0f", neon_green:"#0f0", neon_red:"#f00", neon_blue:"#00f", neon_yellow:"#ff0", neon_orange:"#f80", neon_pink:"#f6c" };
        var nc = neonColors[styleId] || "#fff";
        ctx.shadowColor = nc; ctx.shadowBlur = 20; ctx.fillStyle = nc; ctx.fillText(text, 0, 0);
        ctx.shadowBlur = 12; ctx.fillText(text, 0, 0);
        ctx.shadowBlur = 0; ctx.fillStyle = "#fff"; ctx.globalAlpha = 0.9; ctx.fillText(text, 0, 0); ctx.globalAlpha = 1;
        return;
      }
      case "neon_double":
        ctx.shadowColor = textColor; ctx.shadowBlur = 25; ctx.strokeStyle = textColor; ctx.lineWidth = 2; ctx.strokeText(text, 0, 0);
        ctx.shadowBlur = 12; ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0;
        return;
      case "neon_triple":
        ctx.shadowColor = textColor; ctx.shadowBlur = 30; ctx.strokeStyle = textColor; ctx.lineWidth = 3; ctx.strokeText(text, 0, 0);
        ctx.shadowBlur = 15; ctx.strokeText(text, 0, 0);
        ctx.shadowBlur = 5; ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0;
        return;
      case "neon_tube":
        ctx.shadowColor = textColor; ctx.shadowBlur = 15; ctx.strokeStyle = textColor; ctx.lineWidth = fontSize * 0.06; ctx.strokeText(text, 0, 0);
        ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0;
        return;
      case "neon_soft":
        ctx.shadowColor = textColor; ctx.shadowBlur = 25; ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0;
        return;
      case "neon_hard":
        ctx.strokeStyle = textColor; ctx.lineWidth = 2; ctx.strokeText(text, 0, 0);
        ctx.fillStyle = textColor; ctx.fillText(text, 0, 0);
        return;

      case "chrome_silver": {
        var g = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        g.addColorStop(0, "#e8e8e8"); g.addColorStop(0.2, "#fff"); g.addColorStop(0.5, "#888"); g.addColorStop(0.8, "#fff"); g.addColorStop(1, "#ccc");
        ctx.fillStyle = g; ctx.fillText(text, 0, 0); return;
      }
      case "chrome_gold": {
        var g2 = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        g2.addColorStop(0, "#f9e79f"); g2.addColorStop(0.3, "#f4d03f"); g2.addColorStop(0.5, "#d4ac0d"); g2.addColorStop(0.7, "#f4d03f"); g2.addColorStop(1, "#f9e79f");
        ctx.fillStyle = g2; ctx.fillText(text, 0, 0); return;
      }
      case "chrome_rose": {
        var g3 = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        g3.addColorStop(0, "#fadbd8"); g3.addColorStop(0.5, "#e8b4b8"); g3.addColorStop(1, "#f5c6cb");
        ctx.fillStyle = g3; ctx.fillText(text, 0, 0); return;
      }
      case "chrome_bronze": {
        var g4 = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        g4.addColorStop(0, "#d4a574"); g4.addColorStop(0.5, "#8b4513"); g4.addColorStop(1, "#cd7f32");
        ctx.fillStyle = g4; ctx.fillText(text, 0, 0); return;
      }
      case "chrome_copper": {
        var g5 = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        g5.addColorStop(0, "#da8a67"); g5.addColorStop(0.5, "#b87333"); g5.addColorStop(1, "#da8a67");
        ctx.fillStyle = g5; ctx.fillText(text, 0, 0); return;
      }
      case "chrome_polished": {
        var g6 = ctx.createLinearGradient(x0, -halfH * 1.5, x1, halfH * 1.5);
        g6.addColorStop(0, "#bdc3c7"); g6.addColorStop(0.25, "#fff"); g6.addColorStop(0.5, "#7f8c8d"); g6.addColorStop(0.75, "#fff"); g6.addColorStop(1, "#95a5a6");
        ctx.fillStyle = g6; ctx.fillText(text, 0, 0); return;
      }
      case "chrome_brushed": {
        var g7 = ctx.createLinearGradient(x0, 0, x1, 0);
        g7.addColorStop(0, "#636e72"); g7.addColorStop(0.2, "#b2bec3"); g7.addColorStop(0.5, "#2d3436"); g7.addColorStop(0.8, "#b2bec3"); g7.addColorStop(1, "#636e72");
        ctx.fillStyle = g7; ctx.fillText(text, 0, 0); return;
      }
      case "chrome_reflective": {
        var g8 = ctx.createLinearGradient(x0, -halfH * 2, x1, halfH * 2);
        g8.addColorStop(0, "#2c3e50"); g8.addColorStop(0.3, "#ecf0f1"); g8.addColorStop(0.5, "#7f8c8d"); g8.addColorStop(0.7, "#ecf0f1"); g8.addColorStop(1, "#34495e");
        ctx.fillStyle = g8; ctx.fillText(text, 0, 0); return;
      }
      case "chrome_rainbow":
        var g9 = ctx.createLinearGradient(x0, 0, x1, 0);
        for (var k = 0; k <= 1; k += 0.1) g9.addColorStop(k, "hsl(" + (phase * 360 + k * 60) % 360 + ",100%,50%)");
        ctx.fillStyle = g9; ctx.fillText(text, 0, 0); return;

      case "shadow_drop":
        ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 8; ctx.shadowOffsetX = 4; ctx.shadowOffsetY = 4;
        fillGrad(); ctx.shadowBlur = 0; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0; return;
      case "shadow_long": {
        var d = 8; for (var s = d; s >= 1; s--) { ctx.fillStyle = "rgba(0,0,0," + (0.3 * s / d) + ")"; ctx.fillText(text, s, s); }
        fillGrad(); return;
      }
      case "shadow_soft":
        ctx.shadowColor = "rgba(0,0,0,0.4)"; ctx.shadowBlur = 15; ctx.shadowOffsetY = 4;
        fillGrad(); ctx.shadowBlur = 0; ctx.shadowOffsetY = 0; return;
      case "shadow_hard":
        ctx.fillStyle = "rgba(0,0,0,0.8)"; ctx.fillText(text, 2, 2);
        fillGrad(); return;
      case "shadow_multiple":
        ctx.shadowColor = "rgba(0,0,0,0.3)"; ctx.shadowBlur = 4; ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 2; fillGrad();
        ctx.shadowOffsetX = -1; ctx.shadowOffsetY = 3; fillGrad();
        ctx.shadowBlur = 0; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0; return;
      case "shadow_inner":
        fillGrad();
        ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = 8;
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "rgba(0,0,0,0.3)"; ctx.fillText(text, 0, 0);
        ctx.globalCompositeOperation = "source-over"; ctx.shadowBlur = 0; return;
      case "shadow_deep":
        ctx.shadowColor = "rgba(0,0,0,0.8)"; ctx.shadowBlur = 20; ctx.shadowOffsetY = 6;
        fillGrad(); ctx.shadowBlur = 0; ctx.shadowOffsetY = 0; return;
      case "shadow_neon":
        ctx.shadowColor = textColor; ctx.shadowBlur = 15; ctx.fillStyle = "rgba(0,0,0,0.5)"; ctx.fillText(text, 3, 3);
        fillGrad(); ctx.shadowBlur = 0; return;

      case "outline_thick": ctx.strokeStyle = textColor; ctx.lineWidth = fontSize * 0.08; ctx.strokeText(text, 0, 0); fillGrad(); return;
      case "outline_thin": ctx.strokeStyle = textColor; ctx.lineWidth = 1; ctx.strokeText(text, 0, 0); fillGrad(); return;
      case "outline_double":
        ctx.strokeStyle = textColor; ctx.lineWidth = 3; ctx.strokeText(text, 0, 0);
        ctx.lineWidth = 1; ctx.strokeText(text, 0, 0); fillGrad(); return;
      case "outline_dotted":
        ctx.setLineDash([2, 3]); ctx.strokeStyle = textColor; ctx.lineWidth = 2; ctx.strokeText(text, 0, 0); ctx.setLineDash([]); fillGrad(); return;
      case "outline_dashed":
        ctx.setLineDash([6, 4]); ctx.strokeStyle = textColor; ctx.lineWidth = 2; ctx.strokeText(text, 0, 0); ctx.setLineDash([]); fillGrad(); return;
      case "outline_hollow":
        ctx.strokeStyle = textColor; ctx.lineWidth = fontSize * 0.06; ctx.strokeText(text, 0, 0); return;
      case "outline_gradient":
        ctx.strokeStyle = textColor; ctx.lineWidth = 3; ctx.strokeText(text, 0, 0);
        if (grad) { ctx.fillStyle = grad; ctx.fillText(text, 0, 0); } return;
      case "outline_neon":
        ctx.shadowColor = textColor; ctx.shadowBlur = 10; ctx.strokeStyle = textColor; ctx.lineWidth = 2; ctx.strokeText(text, 0, 0);
        ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0; return;

      case "extrude_3d": {
        var dep = 8;
        for (var e = dep; e >= 1; e--) { ctx.fillStyle = "rgba(0,0,0," + (0.15 * e / dep) + ")"; ctx.fillText(text, e, e); }
        fillGrad(); return;
      }
      case "extrude_stack": {
        for (var st = 6; st >= 1; st--) { ctx.fillStyle = "rgba(0,0,0," + (0.2 - st * 0.02) + ")"; ctx.fillText(text, st * 2, st * 2); }
        fillGrad(); return;
      }
      case "emboss":
        ctx.fillStyle = "#ccc"; ctx.fillText(text, 1, 1);
        ctx.fillStyle = "#333"; ctx.fillText(text, -1, -1);
        ctx.fillStyle = "#888"; ctx.fillText(text, 0, 0); return;
      case "engrave":
        ctx.fillStyle = "#333"; ctx.fillText(text, 1, 1);
        ctx.fillStyle = "#ccc"; ctx.fillText(text, -1, -1);
        ctx.fillStyle = "#666"; ctx.fillText(text, 0, 0); return;
      case "bevel":
        ctx.strokeStyle = "#fff"; ctx.lineWidth = 1; ctx.strokeText(text, -1, -1);
        ctx.strokeStyle = "#000"; ctx.lineWidth = 1; ctx.strokeText(text, 1, 1);
        fillGrad(); return;
      case "depth_3d":
        ctx.fillStyle = "rgba(0,0,0,0.4)"; ctx.fillText(text, 3, 4);
        fillGrad(); return;
      case "perspective_3d":
        ctx.save(); ctx.transform(1, 0.1, 0, 1, 0, 0);
        fillGrad(); ctx.restore(); return;

      case "rainbow": {
        var rg = ctx.createLinearGradient(x0, 0, x1, 0);
        for (var rk = 0; rk <= 1; rk += 0.05) rg.addColorStop(rk, "hsl(" + (phase * 360 + rk * 360) % 360 + ",100%,55%)");
        ctx.fillStyle = rg; ctx.fillText(text, 0, 0); return;
      }
      case "fire": {
        var fg = ctx.createLinearGradient(x0, halfH, x1, -halfH);
        fg.addColorStop(0, "#ff6600"); fg.addColorStop(0.3, "#ff3300"); fg.addColorStop(0.6, "#ffcc00"); fg.addColorStop(1, "#ffff99");
        ctx.fillStyle = fg; ctx.fillText(text, 0, 0); return;
      }
      case "ice": {
        var ig = ctx.createLinearGradient(x0, 0, x1, 0);
        ig.addColorStop(0, "#e0f7fa"); ig.addColorStop(0.5, "#b2ebf2"); ig.addColorStop(1, "#80deea");
        ctx.fillStyle = ig; ctx.fillText(text, 0, 0); return;
      }
      case "ocean": {
        var og = ctx.createLinearGradient(x0, 0, x1, 0);
        og.addColorStop(0, "#006994"); og.addColorStop(0.5, "#00acc1"); og.addColorStop(1, "#4dd0e1");
        ctx.fillStyle = og; ctx.fillText(text, 0, 0); return;
      }
      case "sunset": {
        var sg = ctx.createLinearGradient(x0, 0, x1, 0);
        sg.addColorStop(0, "#ff6b6b"); sg.addColorStop(0.5, "#feca57"); sg.addColorStop(1, "#ff9ff3");
        ctx.fillStyle = sg; ctx.fillText(text, 0, 0); return;
      }
      case "forest": {
        var fg2 = ctx.createLinearGradient(x0, 0, x1, 0);
        fg2.addColorStop(0, "#2e7d32"); fg2.addColorStop(0.5, "#66bb6a"); fg2.addColorStop(1, "#1b5e20");
        ctx.fillStyle = fg2; ctx.fillText(text, 0, 0); return;
      }
      case "candy": {
        var cg = ctx.createLinearGradient(x0, 0, x1, 0);
        cg.addColorStop(0, "#ff9ff3"); cg.addColorStop(0.5, "#f368e0"); cg.addColorStop(1, "#ff6b9d");
        ctx.fillStyle = cg; ctx.fillText(text, 0, 0); return;
      }
      case "pastel": {
        var pg = ctx.createLinearGradient(x0, 0, x1, 0);
        pg.addColorStop(0, "#dfe6e9"); pg.addColorStop(0.3, "#fd79a8"); pg.addColorStop(0.6, "#a29bfe"); pg.addColorStop(1, "#74b9ff");
        ctx.fillStyle = pg; ctx.fillText(text, 0, 0); return;
      }
      case "aurora": {
        var ag = ctx.createLinearGradient(x0, 0, x1, 0);
        ag.addColorStop(0, "#00b894"); ag.addColorStop(0.3, "#00cec9"); ag.addColorStop(0.6, "#6c5ce7"); ag.addColorStop(1, "#a29bfe");
        ctx.fillStyle = ag; ctx.fillText(text, 0, 0); return;
      }
      case "vaporwave": {
        var vg = ctx.createLinearGradient(x0, 0, x1, 0);
        vg.addColorStop(0, "#ff71ce"); vg.addColorStop(0.5, "#01cdfe"); vg.addColorStop(1, "#05ffa1");
        ctx.fillStyle = vg; ctx.fillText(text, 0, 0); return;
      }
      case "cyberpunk": {
        var cpg = ctx.createLinearGradient(x0, 0, x1, 0);
        cpg.addColorStop(0, "#ff006e"); cpg.addColorStop(0.5, "#8338ec"); cpg.addColorStop(1, "#3a86ff");
        ctx.fillStyle = cpg; ctx.fillText(text, 0, 0); return;
      }
      case "matrix": ctx.fillStyle = "#00ff41"; ctx.shadowColor = "#00ff41"; ctx.shadowBlur = 10; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0; return;
      case "toxic": ctx.fillStyle = "#39ff14"; ctx.shadowColor = "#39ff14"; ctx.shadowBlur = 12; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0; return;
      case "electric": ctx.fillStyle = "#00d4ff"; ctx.shadowColor = "#00d4ff"; ctx.shadowBlur = 15; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0; return;
      case "plasma": {
        var plg = ctx.createLinearGradient(x0, 0, x1, 0);
        plg.addColorStop(0, "#9b59b6"); plg.addColorStop(0.5, "#e74c3c"); plg.addColorStop(1, "#f39c12");
        ctx.fillStyle = plg; ctx.fillText(text, 0, 0); return;
      }
      case "holographic": {
        var hg = ctx.createLinearGradient(x0 + phase * 100, 0, x1 + phase * 100, 0);
        for (var hk = 0; hk <= 1; hk += 0.1) hg.addColorStop(hk, "hsla(" + (phase * 360 + hk * 360) % 360 + ",100%,60%,0.9)");
        ctx.fillStyle = hg; ctx.fillText(text, 0, 0); return;
      }
      case "oil_slick": {
        var osg = ctx.createLinearGradient(x0, 0, x1, 0);
        osg.addColorStop(0, "#667eea"); osg.addColorStop(0.25, "#f093fb"); osg.addColorStop(0.5, "#4facfe"); osg.addColorStop(0.75, "#43e97b"); osg.addColorStop(1, "#fa709a");
        ctx.fillStyle = osg; ctx.fillText(text, 0, 0); return;
      }

      case "comic": ctx.strokeStyle = "#000"; ctx.lineWidth = 4; ctx.strokeText(text, 0, 0); fillGrad(); return;
      case "stencil":
        ctx.fillStyle = "#333"; ctx.fillText(text, 0, 0);
        ctx.strokeStyle = textColor; ctx.lineWidth = 2; ctx.strokeText(text, 0, 0); return;
      case "graffiti": ctx.strokeStyle = textColor; ctx.lineWidth = fontSize * 0.1; ctx.lineJoin = "round"; ctx.strokeText(text, 0, 0); ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); return;
      case "retro": ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); ctx.fillStyle = "#000"; ctx.globalAlpha = 0.3; ctx.fillText(text, 1, 1); ctx.globalAlpha = 1; return;
      case "laser": ctx.shadowColor = textColor; ctx.shadowBlur = 20; ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0; return;
      case "xray": ctx.fillStyle = "#fff"; ctx.fillText(text, 0, 0); ctx.globalCompositeOperation = "difference"; ctx.fillStyle = "#0ff"; ctx.fillText(text, 0, 0); ctx.globalCompositeOperation = "source-over"; return;
      case "thermal": {
        var tg = ctx.createLinearGradient(x0, 0, x1, 0);
        tg.addColorStop(0, "#000"); tg.addColorStop(0.3, "#f00"); tg.addColorStop(0.6, "#ff0"); tg.addColorStop(1, "#fff");
        ctx.fillStyle = tg; ctx.fillText(text, 0, 0); return;
      }
      case "ghost": ctx.globalAlpha = 0.4; fillGrad(); ctx.globalAlpha = 1; return;
      case "invert": ctx.fillStyle = "#fff"; ctx.fillText(text, 0, 0); ctx.globalCompositeOperation = "difference"; ctx.fillStyle = "#000"; ctx.fillText(text, 0, 0); ctx.globalCompositeOperation = "source-over"; return;
      case "frosted": ctx.globalAlpha = 0.85; fillGrad(); ctx.globalAlpha = 0.5; ctx.fillStyle = "#fff"; ctx.fillText(text, 0, 0); ctx.globalAlpha = 1; return;
      case "shimmer": ctx.globalAlpha = 0.9 + Math.sin(t) * 0.1; fillGrad(); ctx.globalAlpha = 1; return;

      case "glow_soft": ctx.shadowColor = textColor; ctx.shadowBlur = 18; fillGrad(); ctx.shadowBlur = 0; return;
      case "glow_hard": ctx.shadowColor = textColor; ctx.shadowBlur = 6; fillGrad(); ctx.shadowBlur = 0; return;
      case "glow_double": ctx.shadowColor = textColor; ctx.shadowBlur = 25; fillGrad(); ctx.shadowBlur = 10; fillGrad(); ctx.shadowBlur = 0; return;
      case "glow_outline": ctx.shadowColor = textColor; ctx.shadowBlur = 12; ctx.strokeStyle = textColor; ctx.lineWidth = 1; ctx.strokeText(text, 0, 0); fillGrad(); ctx.shadowBlur = 0; return;
      case "glow_pulse": ctx.shadowColor = textColor; ctx.shadowBlur = 10 + Math.sin(t) * 8; fillGrad(); ctx.shadowBlur = 0; return;

      case "gradient_horizon": {
        var hzg = ctx.createLinearGradient(x0, halfH, x1, -halfH);
        hzg.addColorStop(0, "#1a1a2e"); hzg.addColorStop(0.5, "#e94560"); hzg.addColorStop(1, "#0f3460");
        ctx.fillStyle = hzg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_midnight": {
        var mg = ctx.createLinearGradient(x0, 0, x1, 0);
        mg.addColorStop(0, "#2c3e50"); mg.addColorStop(0.5, "#3498db"); mg.addColorStop(1, "#9b59b6");
        ctx.fillStyle = mg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_peach": {
        var pchg = ctx.createLinearGradient(x0, 0, x1, 0);
        pchg.addColorStop(0, "#fff5ee"); pchg.addColorStop(0.5, "#ffdab9"); pchg.addColorStop(1, "#ff8c69");
        ctx.fillStyle = pchg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_mint": {
        var mtg = ctx.createLinearGradient(x0, 0, x1, 0);
        mtg.addColorStop(0, "#98ff98"); mtg.addColorStop(0.5, "#3eb489"); mtg.addColorStop(1, "#98fb98");
        ctx.fillStyle = mtg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_lavender": {
        var lvg = ctx.createLinearGradient(x0, 0, x1, 0);
        lvg.addColorStop(0, "#e6e6fa"); lvg.addColorStop(0.5, "#9370db"); lvg.addColorStop(1, "#dda0dd");
        ctx.fillStyle = lvg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_coral": {
        var crg = ctx.createLinearGradient(x0, 0, x1, 0);
        crg.addColorStop(0, "#ff7f50"); crg.addColorStop(0.5, "#ff6b6b"); crg.addColorStop(1, "#ee5a24");
        ctx.fillStyle = crg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_teal": {
        var tlg = ctx.createLinearGradient(x0, 0, x1, 0);
        tlg.addColorStop(0, "#008080"); tlg.addColorStop(0.5, "#20b2aa"); tlg.addColorStop(1, "#48d1cc");
        ctx.fillStyle = tlg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_amber": {
        var amg = ctx.createLinearGradient(x0, 0, x1, 0);
        amg.addColorStop(0, "#ffbf00"); amg.addColorStop(0.5, "#ff8c00"); amg.addColorStop(1, "#ff7f00");
        ctx.fillStyle = amg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_cotton": {
        var ccg = ctx.createLinearGradient(x0, 0, x1, 0);
        ccg.addColorStop(0, "#ffb3d9"); ccg.addColorStop(0.5, "#ff69b4"); ccg.addColorStop(1, "#ffb6c1");
        ctx.fillStyle = ccg; ctx.fillText(text, 0, 0); return;
      }
      case "gradient_neon": {
        var ng = ctx.createLinearGradient(x0, 0, x1, 0);
        ng.addColorStop(0, "#ff00ff"); ng.addColorStop(0.5, "#00ffff"); ng.addColorStop(1, "#ff00ff");
        ctx.fillStyle = ng; ctx.shadowColor = "#0ff"; ctx.shadowBlur = 10; ctx.fillText(text, 0, 0); ctx.shadowBlur = 0; return;
      }

      case "metallic_steel": {
        var msg = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        msg.addColorStop(0, "#71797e"); msg.addColorStop(0.5, "#bcc6cc"); msg.addColorStop(1, "#71797e");
        ctx.fillStyle = msg; ctx.fillText(text, 0, 0); return;
      }
      case "metallic_copper": {
        var mcg = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        mcg.addColorStop(0, "#b87333"); mcg.addColorStop(0.5, "#da8a67"); mcg.addColorStop(1, "#8b4513");
        ctx.fillStyle = mcg; ctx.fillText(text, 0, 0); return;
      }
      case "metallic_titanium": {
        var mtg2 = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        mtg2.addColorStop(0, "#878681"); mtg2.addColorStop(0.5, "#c0c0c0"); mtg2.addColorStop(1, "#565656");
        ctx.fillStyle = mtg2; ctx.fillText(text, 0, 0); return;
      }
      case "metallic_platinum": {
        var ptg = ctx.createLinearGradient(x0, -halfH, x1, halfH);
        ptg.addColorStop(0, "#e5e4e2"); ptg.addColorStop(0.5, "#fff"); ptg.addColorStop(1, "#a0a0a0");
        ctx.fillStyle = ptg; ctx.fillText(text, 0, 0); return;
      }
      case "metallic_gunmetal": {
        var gmg = ctx.createLinearGradient(x0, 0, x1, 0);
        gmg.addColorStop(0, "#2c3539"); gmg.addColorStop(0.5, "#4a5568"); gmg.addColorStop(1, "#2d3748");
        ctx.fillStyle = gmg; ctx.fillText(text, 0, 0); return;
      }

      default:
        if (grad) { ctx.fillStyle = grad; ctx.fillText(text, 0, 0); }
        else { ctx.fillStyle = textColor; ctx.fillText(text, 0, 0); }
    }
  }

  window.TEXT_STYLES = TEXT_STYLES;
  window.applyTextStyle = applyTextStyle;
})(window);
