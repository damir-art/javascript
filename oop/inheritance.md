# Наследование
- Возможность объектов наследовать функционал от других объектов, без дублирования кода,
- Избавление от дублирования кода.

Наследование функционала:

    Object
    -- EventTarget (addEventListener, removeEventListener, dispatchEvent)
    ---- Window
    ---- FileReader
    ---- XMLHTTPRequest
    ---- Element
    ------ div
    ------ span
    ------ button
