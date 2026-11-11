# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Jaime Arturo Rodríguez Gómez — Oftalmología
**Ciudad:** Mérida, Yucatán
**Especialidad:** Cirujano Oftalmólogo (Segmento Anterior, Alta Especialidad en Retina y Vítreo)

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de Oftalmología de alta gama.
Tono: Preciso, sobrio y de autoridad clínica — editorial y confiable, nunca alarmante ni gráfico.
Estilo: Renders 3D anatómicos esquemáticos del ojo (córnea, cristalino, retina) para enfermedades; fotografía clínica de instrumental oftalmológico y equipo de diagnóstico ordenado (lámpara de hendidura, equipo de fondo de ojo, quirófano oftalmológico) para procedimientos; fotografía de escenas cotidianas de paciente con iluminación natural suave para síntomas.
Identidad visual OBLIGATORIA (paleta real de marca del doctor, extraída de su logotipo oficial): navy profundo (#273A5B) como acento principal, azul cielo (#75AFE1) como acento secundario, dorado (#EEC970) como detalle mínimo de acento — fondo dominante blanco cálido/neutro claro, nunca blanco frío ni negro total.
Restricciones: Cero nombres de medicamentos/marcas de lentes intraoculares visibles. Cero logotipos de marcas comerciales. Cero rostros de pacientes reales o reconocibles. Cero texto superpuesto en la imagen. Cero cirugía en proceso con sangre o tejido explícito — usar diagramas esquemáticos, instrumental ordenado o encuadres discretos en su lugar. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción.
Formato: JPG horizontal de aspecto 16:10 (--ar 16:10 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright, precise editorial lighting — soft natural light or elegant studio light, never dark/moody.
- Color Palette: Deep Navy (#273A5B), Sky Blue (#75AFE1), warm Gold accent (#EEC970) used sparingly, warm off-white background.
- Composition: Centered, calm, editorial framing with generous negative space — precise and clinical, like a well-lit ophthalmology consult room.
- Suffixes: realistic medical CGI or high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, neon, glowing digital UI, hud, text, words, letters, watermark, signature, surgery in progress, excessive blood, gore, dark background.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Catarata (`public/images/diseases/catarata.jpg`)
```text
Render 3D anatómico esquemático de un corte transversal del ojo humano mostrando un cristalino opacificado (blanquecino/amarillento) frente a una retina sana, estilo educativo de libro de texto médico.

Lighting: Soft warm studio lighting, clean highlight on the lens structure.
Color Palette: Deep navy (#273A5B) outline details, sky blue (#75AFE1) accent on healthy structures, warm off-white background.
Composition: Centered cross-section of the eye, macro framing, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 2. Retinopatía Diabética (`public/images/diseases/retinopatia-diabetica.jpg`)
```text
Render 3D anatómico esquemático del fondo de ojo mostrando la retina con microvasos dañados discretos y manchas hemorrágicas sutiles, estilo educativo limpio, nunca gráfico.

Lighting: Soft clinical studio lighting.
Color Palette: Deep navy (#273A5B) vessel outlines, sky blue (#75AFE1) retinal tissue, warm off-white background.
Composition: Centered retinal fundus view, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, excessive blood, gore.
```

### 3. Miopía (`public/images/diseases/miopia.jpg`)
```text
Render 3D esquemático de un ojo en corte lateral mostrando cómo la luz enfoca delante de la retina (globo ocular alargado), con rayos de luz estilizados, estilo educativo.

Lighting: Soft bright editorial lighting.
Color Palette: Deep navy (#273A5B) eye outline, sky blue (#75AFE1) light ray accents, warm off-white background.
Composition: Centered lateral cross-section diagram, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 4. Astigmatismo (`public/images/diseases/astigmatismo.jpg`)
```text
Render 3D esquemático de una córnea con curvatura irregular mostrando cómo la luz se dispersa en múltiples puntos de enfoque, estilo educativo claro.

Lighting: Soft bright editorial lighting.
Color Palette: Deep navy (#273A5B) cornea outline, sky blue (#75AFE1) light refraction lines, warm off-white background.
Composition: Centered corneal diagram, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 5. Presbicia (`public/images/diseases/presbicia.jpg`)
```text
Fotografía clínica discreta de un adulto mayor sosteniendo un libro o teléfono a distancia de brazo para enfocar texto, iluminación natural suave, encuadre editorial, sin rostro identificable (ángulo lateral/espalda o desenfoque de rasgos).

Lighting: Soft warm natural light.
Color Palette: Warm off-white tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle accents in wardrobe/background.
Composition: Centered editorial lifestyle framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face close-up.
```

### 6. Agujero Macular (`public/images/diseases/agujero-macular.jpg`)
```text
Render 3D anatómico esquemático del fondo de ojo mostrando una pequeña abertura circular en el centro de la mácula, estilo educativo discreto, nunca gráfico.

Lighting: Soft clinical studio lighting.
Color Palette: Deep navy (#273A5B) retinal outline, sky blue (#75AFE1) macular detail, warm off-white background.
Composition: Centered macular close-up diagram, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 7. Membrana Epirretiniana (`public/images/diseases/membrana-epirretiniana.jpg`)
```text
Render 3D anatómico esquemático de la retina mostrando una fina capa translúcida arrugada sobre la superficie macular, estilo educativo limpio.

Lighting: Soft clinical studio lighting.
Color Palette: Deep navy (#273A5B) retinal outline, sky blue (#75AFE1) membrane highlight, warm off-white background.
Composition: Centered macular cross-section, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 8. Pterigión (`public/images/diseases/pterigion.jpg`)
```text
Fotografía clínica discreta y respetuosa de la superficie ocular mostrando un pequeño crecimiento de tejido fibrovascular desde la conjuntiva hacia el borde de la córnea, encuadre macro editorial, no gráfico.

Lighting: Soft clinical studio lighting.
Color Palette: Natural eye tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle framing accents.
Composition: Centered macro eye framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, graphic close-up.
```

### 9. Conjuntivitis (`public/images/diseases/conjuntivitis.jpg`)
```text
Fotografía clínica discreta de un ojo con enrojecimiento leve de la conjuntiva, encuadre editorial suave, no gráfico ni alarmante.

Lighting: Soft clinical studio lighting.
Color Palette: Natural eye tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle framing.
Composition: Centered macro eye framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, graphic redness, gore.
```

### 10. Síndrome de Ojo Seco (`public/images/diseases/sindrome-de-ojo-seco.jpg`)
```text
Fotografía clínica discreta de un primer plano de ojo con una gota de lágrima artificial cayendo, iluminación suave, editorial y calmada.

Lighting: Soft warm clinical lighting.
Color Palette: Natural eye tones, sky blue (#75AFE1) water droplet highlight, deep navy (#273A5B) subtle accents.
Composition: Centered macro eye framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, graphic irritation.
```

### 11. Degeneración Macular (`public/images/diseases/degeneracion-macular.jpg`)
```text
Render 3D anatómico esquemático del fondo de ojo mostrando pequeños depósitos (drusas) bajo la retina central, estilo educativo limpio.

Lighting: Soft clinical studio lighting.
Color Palette: Deep navy (#273A5B) retinal outline, gold (#EEC970) subtle drusen accent, warm off-white background.
Composition: Centered macular diagram, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 12. Desprendimiento de Retina (`public/images/diseases/desprendimiento-de-retina.jpg`)
```text
Render 3D anatómico esquemático del interior del ojo mostrando una sección de retina separada de su capa de sostén, estilo educativo claro, nunca gráfico.

Lighting: Soft clinical studio lighting.
Color Palette: Deep navy (#273A5B) retinal outline, sky blue (#75AFE1) detachment zone highlight, warm off-white background.
Composition: Centered internal eye cross-section, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 13. Glaucoma (`public/images/diseases/glaucoma.jpg`)
```text
Render 3D anatómico esquemático del ojo mostrando el flujo del humor acuoso y el nervio óptico, con una flecha sutil indicando presión elevada, estilo educativo claro.

Lighting: Soft clinical studio lighting.
Color Palette: Deep navy (#273A5B) optic nerve outline, sky blue (#75AFE1) fluid flow accent, warm off-white background.
Composition: Centered eye cross-section diagram, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 14. Blefaritis (`public/images/diseases/blefaritis.jpg`)
```text
Fotografía clínica discreta de un primer plano del borde palpebral con leve enrojecimiento, encuadre editorial suave y no gráfico.

Lighting: Soft clinical studio lighting.
Color Palette: Natural eyelid tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle framing accents.
Composition: Centered macro eyelid framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, graphic irritation, gore.
```

### 15. Chalazión (`public/images/diseases/chalazion.jpg`)
```text
Fotografía clínica discreta de un primer plano de párpado mostrando un pequeño bulto firme y localizado, encuadre editorial suave, no gráfico.

Lighting: Soft clinical studio lighting.
Color Palette: Natural eyelid tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle framing accents.
Composition: Centered macro eyelid framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, graphic detail, gore.
```

---

## 🔬 SECCIÓN 2: PROMPTS PARA SERVICIOS/PROCEDIMIENTOS

### 1. Cirugía de Catarata (`public/images/services/cirugia-de-catarata.jpg`)
```text
Fotografía clínica editorial de un quirófano oftalmológico ordenado con microscopio quirúrgico y equipo de facoemulsificación, sin paciente ni personal visible, iluminación limpia.

Lighting: Clean bright clinical studio lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) equipment accents, neutral clinical whites/grays.
Composition: Centered equipment framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient, surgery in progress.
```

### 2. Cirugía de Retina (Vitrectomía, Facovitrectomía) (`public/images/services/cirugia-de-retina.jpg`)
```text
Fotografía clínica editorial de equipo de vitrectomía oftalmológica ordenado en quirófano, sin paciente ni personal visible, iluminación limpia y precisa.

Lighting: Clean bright clinical studio lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) equipment accents, neutral clinical whites/grays.
Composition: Centered equipment framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient, surgery in progress.
```

### 3. Cirugía Refractiva LASIK (`public/images/services/cirugia-refractiva-lasik.jpg`)
```text
Fotografía clínica editorial de un equipo de láser excimer LASIK en una sala de cirugía refractiva ordenada, sin paciente visible, iluminación limpia.

Lighting: Clean bright clinical studio lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) equipment accents, neutral clinical whites.
Composition: Centered equipment framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient.
```

### 4. Cirugía Facorefractiva (`public/images/services/cirugia-facorefractiva.jpg`)
```text
Fotografía clínica editorial de un set de lentes intraoculares premium y bandeja quirúrgica ordenada sobre fondo neutro, sin marcas comerciales visibles.

Lighting: Clean bright clinical studio lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) accents, neutral clinical whites.
Composition: Centered product/equipment framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible brand logos.
```

### 5. Cirugía de Resección de Pterigión (`public/images/services/cirugia-de-reseccion-de-pterigion.jpg`)
```text
Fotografía clínica editorial de instrumental microquirúrgico oftalmológico ordenado sobre campo estéril, sin paciente visible, iluminación limpia.

Lighting: Clean bright clinical studio lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) accents, neutral clinical whites.
Composition: Centered instrument framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient.
```

### 6. Cirugía de Chalazión (`public/images/services/cirugia-de-chalazion.jpg`)
```text
Fotografía clínica editorial de instrumental oftalmológico menor ordenado en consultorio, sin paciente visible, iluminación limpia y cálida.

Lighting: Clean warm clinical lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) accents, neutral clinical whites.
Composition: Centered instrument framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient.
```

### 7. Fotocoagulación Retinal (`public/images/services/fotocoagulacion-retinal.jpg`)
```text
Fotografía clínica editorial de un equipo de láser de fotocoagulación retinal en consultorio oftalmológico ordenado, sin paciente visible.

Lighting: Clean bright clinical studio lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) equipment accents, neutral clinical whites.
Composition: Centered equipment framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient.
```

### 8. Capsulotomía YAG (`public/images/services/capsulotomia-yag.jpg`)
```text
Fotografía clínica editorial de un equipo de láser YAG en consultorio oftalmológico ordenado, sin paciente visible, iluminación limpia.

Lighting: Clean bright clinical studio lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) equipment accents, neutral clinical whites.
Composition: Centered equipment framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient.
```

### 9. Iridotomía (`public/images/services/iridotomia.jpg`)
```text
Fotografía clínica editorial de un equipo de láser para iridotomía en consultorio oftalmológico ordenado, sin paciente visible, iluminación precisa.

Lighting: Clean bright clinical studio lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) equipment accents, neutral clinical whites.
Composition: Centered equipment framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient.
```

### 10. Revisión de Fondo de Ojo (`public/images/services/revision-de-fondo-de-ojo.jpg`)
```text
Fotografía clínica editorial de un oftalmoscopio/retinógrafo de fondo de ojo en consultorio ordenado, con silla de exploración, sin paciente visible.

Lighting: Clean warm clinical lighting.
Color Palette: Deep navy (#273A5B) and sky blue (#75AFE1) equipment accents, neutral clinical whites.
Composition: Centered equipment framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible patient.
```

---

## 👁️ SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Ardor en los Ojos (`public/images/symptoms/ardor-en-los-ojos.jpg`)
```text
Fotografía clínica discreta de una persona frotándose suavemente un ojo con expresión de leve molestia, encuadre editorial, sin rostro frontal identificable.

Lighting: Soft warm natural light.
Color Palette: Natural skin tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle wardrobe/background accents.
Composition: Centered editorial lifestyle framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face close-up.
```

### 2. Visión Borrosa (`public/images/symptoms/vision-borrosa.jpg`)
```text
Fotografía editorial conceptual de una persona mirando un texto o pantalla con suave desenfoque simulado en primer plano para transmitir visión borrosa, sin rostro identificable.

Lighting: Soft warm natural light.
Color Palette: Natural tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle accents.
Composition: Centered editorial lifestyle framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text overlay, watermark, signature, recognizable face close-up.
```

### 3. Sensación de Cuerpo Extraño (`public/images/symptoms/sensacion-de-cuerpo-extrano.jpg`)
```text
Fotografía clínica discreta de un primer plano de ojo parpadeando con leve irritación, encuadre editorial suave, no gráfico.

Lighting: Soft clinical studio lighting.
Color Palette: Natural eye tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle framing accents.
Composition: Centered macro eye framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, graphic irritation.
```

### 4. Ojo Rojo (`public/images/symptoms/ojo-rojo.jpg`)
```text
Fotografía clínica discreta de un ojo con enrojecimiento leve de la conjuntiva, encuadre editorial suave y no alarmante.

Lighting: Soft clinical studio lighting.
Color Palette: Natural eye tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle framing accents.
Composition: Centered macro eye framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, graphic redness.
```

### 5. Manchas en la Visión (`public/images/symptoms/manchas-en-la-vision.jpg`)
```text
Fotografía editorial conceptual de un cielo despejado con pequeñas manchas translúcidas superpuestas sutilmente para transmitir moscas volantes, estilo artístico discreto.

Lighting: Soft bright natural daylight.
Color Palette: Sky blue (#75AFE1) dominant, deep navy (#273A5B) subtle accents, warm off-white clouds.
Composition: Centered sky framing, generous negative space.
Suffixes: high-fidelity photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text overlay, watermark, signature.
```

### 6. Presión Intraocular Elevada (`public/images/symptoms/presion-intraocular-elevada.jpg`)
```text
Render 3D esquemático conceptual de un ojo con un indicador sutil de presión (como una flecha o medidor estilizado), estilo educativo claro, nunca alarmante.

Lighting: Soft clinical studio lighting.
Color Palette: Deep navy (#273A5B) eye outline, gold (#EEC970) subtle pressure indicator accent, warm off-white background.
Composition: Centered schematic eye diagram, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, alarming imagery.
```

### 7. Visión Disminuida (`public/images/symptoms/vision-disminuida.jpg`)
```text
Fotografía editorial conceptual de una persona entrecerrando los ojos suavemente para enfocar un objeto lejano, sin rostro frontal identificable.

Lighting: Soft warm natural light.
Color Palette: Natural tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle accents.
Composition: Centered editorial lifestyle framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face close-up.
```

### 8. Inflamación Palpebral (`public/images/symptoms/inflamacion-palpebral.jpg`)
```text
Fotografía clínica discreta de un primer plano de párpado con leve inflamación, encuadre editorial suave, no gráfico.

Lighting: Soft clinical studio lighting.
Color Palette: Natural eyelid tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle framing accents.
Composition: Centered macro eyelid framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, graphic swelling.
```

### 9. Picazón Ocular (`public/images/symptoms/picazon-ocular.jpg`)
```text
Fotografía clínica discreta de una persona tocándose suavemente el área cercana al ojo con expresión de leve molestia, sin rostro frontal identificable.

Lighting: Soft warm natural light.
Color Palette: Natural tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle accents.
Composition: Centered editorial lifestyle framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face close-up.
```

### 10. Dolor Ocular (`public/images/symptoms/dolor-ocular.jpg`)
```text
Fotografía editorial discreta de una persona con la mano cerca de la sien/ojo en gesto de leve molestia, iluminación suave, sin rostro frontal identificable, nunca dramatizado.

Lighting: Soft warm natural light.
Color Palette: Natural tones, deep navy (#273A5B) and sky blue (#75AFE1) subtle accents.
Composition: Centered editorial lifestyle framing, generous negative space.
Suffixes: high-fidelity clinical photography, 8k, photorealistic, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, dramatic/alarming expression.
```
