# manifest.json

    {

      "manifest_version": 2,
      "name": "Exlinks",
      "version": "1.0",

      "description": "Finding external links on a page.",
      "icons": {
        "48": "icons/link-48.png"
      },

      "applications": {
        "gecko": {
          "id": "exlinks@mozilla.org",
          "strict_min_version": "45.0"
        }
      },

      "content_scripts": [
        {
          "matches": ["*://*.mozilla.org/*"],
          "js": ["exlinks.js"]
        }
      ]

    }

Описания ключей:
- manifest_version - содержит основное метаданное (обяз),
- name - содержит основное метаданное (обяз),
- version - содержит основное метаданное (обяз),
- description - описание (не обяз), отображается в менеджере дополнений,
- icons - значок дополнения (не обяз), отображается в менеджере дополнений,
- applications - определяет ID дополнения (не обяз), так же может использоваться для указания минимальной и максимальной версии Firefox, поддерживаемой расширением,
