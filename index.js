<body>
  <div id="application-root"></div>

<script
  src="https://unpkg.com/react@16/umd/react.development.js"
  crossorigin>
</script>
<script
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
  crossorigin>
</script>
<script
  src="https://unpkg.com/babel-standalone@6/babel.min.js"
  crossorigin>
</script>

<script type="text/babel">
  ReactDOM.render(
    <div>
      <h1>Hello, world!</h1>
      <p>How are you today?</p>
      <h2>Look what React can do!</h2>
    </div>,
    document.querySelector('#application-root')
  );
</script>
</body>