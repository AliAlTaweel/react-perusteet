const App = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log("Hei my name is " + this.name);
    }
    ageA() {
      console.log("my age is " + this.age);
    }
  }
  const ali = new Person("Ali", 35);

  ali.greet();
  ali.ageA();
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

export default App;
