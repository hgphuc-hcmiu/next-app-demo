export default async function Page() {
    let data = await fetch('https://script.google.com/macros/s/AKfycbwixze4oX1olg_b6xkNOfZdnQKHrR1KnFKVJZn9te_iAh4dN3gtaIon0KBUMLtvmSw3Gw/exec?id=m0opoi59')
    let posts = await data.json()
    debugger;
    return (
      <ul>
        {Object.keys(posts).map((key) => (
          <li>{key}: {posts[key]}</li>
        ))}
      </ul>
    )
  }