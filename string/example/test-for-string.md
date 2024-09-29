# Тест для строк
Проверяем, является ли переменная строкой.

    let myString = 'Это моя строка';

    if(typeof myString === 'string') {
      console.log(`Переменная myString является строкой!`)
    }

    if(typeof myString === 'string' && myString.length > 0) {
      console.log(`Переменная myString является строкой и её длина больше нуля!`)
    }

    if(typeof myString === 'string' && myString.trim().length > 0) {
      console.log(`Переменная myString является строкой, её длина больше нуля, даже если отсечь пробелы!`)
    }

HTML:

      <head>
        <title>Checking for an Existing, Nonempty String</title>
      </head>
      <body>
        <h1>Checking for an Existing, Nonempty String</h1>
        <p>Look at the browser's console to see the result.</p>
        <script src="test-for-string.js"></script>
      </body>

SCRIPT:

    const stringTest = '42';
    const numberTest = 42;
    const blankTest = '';
    const nullTest = null;
    const wrappedTest = new String('42');

    // Basic test
    if (typeof stringTest === 'string') {
      console.log('stringTest is a string');
    }
    if (typeof numberTest === 'string') {
      console.log('numberTest is a string');
    }
    if (typeof blankTest === 'string') {
      console.log('blankTest is a string');
    }
    if (typeof nullTest === 'string') {
      console.log('nullTest is a string');
    }
    if (typeof wrappedTest === 'string') {
      console.log('wrappedTest is a string');
    }

    // Test for content
    if (typeof stringTest === 'string' && stringTest.length > 0) {
      console.log('stringTest is a string with text');
    }
    if (typeof blankTest === 'string' && blankTest.length > 0) {
      console.log('blankTest is a string with text');
    }
    if (typeof nullTest === 'string' && nullTest.length > 0) {
      console.log('nullTest');
    }
    if (typeof wrappedTest === 'string' && wrappedTest.length > 0) {
      console.log('wrappedTest');
    }

    // Find even a wrapped string
    if (typeof wrappedTest === 'string' || String.prototype.isPrototypeOf(wrappedTest)) {
      console.log('wrappedTest is a string');
    }
