// Creating a budget class using my python budget 
//Translating the Python code to JavaScript code and learning as I go

// The JavaScript Code:
class Budget {
  // In Python, 'self' is used to refer to the instance, 
  // but in JavaScript, the instance is automatically handled using 'this'
  constructor(name, amount, rent, lights, car, phone, discretionary, needs, laundry, family) {
      this.name = name;
      this.amount = amount;
      this.rent = rent;
      this.lights = lights;
      this.car = car;
      this.phone = phone;
      this.discretionary = discretionary; 
      this.needs = needs;
      this.laundry = laundry;
      this.family = family;
  }
  //Calculate the bill 
    calcBill() {
      return this.amount - (
        this.rent + this.lights + this.car +
        this.phone + this.discretionary +
        this.needs + this.laundry + this.family 
      );
    }
}
//Calculate all of the inputs 
  function calculateBudget() {
    const name = document.getElementById("name").value;
    const amount = Number(document.getElementById("amount").value);
    const rent = Number(document.getElementById("rent").value);
    const lights = Number(document.getElementById("lights").value);
    const car = Number(document.getElementById("car").value);
    const phone = Number(document.getElementById("phone").value);
    const discretionary = Number(document.getElementById("discretionary").value);
    const needs = Number(document.getElementById("needs").value);
    const laundry = Number(document.getElementById("laundry").value);
    const family = Number(document.getElementById("family").value);
//Create an object of the class 
    const myBudget = new Budget(name, amount, rent, lights, car, phone, discretionary, needs, laundry, family);
    const result = myBudget.calcBill();
//Return the result properly formatted to the page 
    document.getElementById("result").innerText = `${name}, you have $${result.toFixed(2)} left after bills.`;
  }
// Creating a budget class using my python budget 
//Translating the Python code to JavaScript code using W3Schools

/* The Python Code: 
class Budget:
    def __init__ (self,name,amount,rent,lights,car,phone,discretionary,needs,laundry):
        self.name = name
        self.amount = amount
        self.rent = rent
        self.lights = lights
        self.car = car
        self.phone = phone
        self.discretionary = discretionary
        self.needs = needs
        self.laundry = laundry
    def monthly_budget(self):
        return f'Hello {self.name}. Ready to Budget?'
    def leftover(self):
        if (self.amount - (self.rent+self.lights+self.car+self.phone+self.discretionary+self.needs+self.laundry)) >= 0:
            print("Hello", self.name, "Your leftover balance for the month is: $", self.amount - (self.rent+self.lights+self.car+self.phone+self.discretionary+self.needs+self.laundry))
        elif (self.amount - (self.rent+self.lights+self.car+self.phone+self.discretionary+self.needs+self.laundry))<0:
            print("So..um..", self.name, 'You are screwed!!!')
print('Hello, are you ready to begin?')
print('')
my_budget = Budget("Hannah",int(input("Your Monthly Amount is: $")),int(input("Your Rent is: $")),int(input("Your Lights are: $")),int(input("Your Car is: $")),int(input("Your Phone is: $")),int(input("Your Discretionary is: $")),int(input("Your Needs Are: $")),int(input("Your Laundry is: $")))
my_budget.leftover()

total = 0
for num in [1, 2, 3, 4]:
    total += num

print(total) */

   /*
   Personal Notes Written for my Reference: 
   
   Python init is a constructor was used to "Initialize objects of a class" (Source: GeeksforGeeks)
   This Python function can be translated to the JS constructor named "constructor" 
   Constructor: "Used to initialize objects of a class" and is "Called every time an object of said class is created" and allows the "obvject to set initial values for its attributes or perform 
   other setup tasks" (Source: GeeksForGeeks) 
   Initialize: Assign an initial Value to a declared variable (Source: GeeksForGeeks)
   Object: "An object is an instance of a class," it is what calls the class to run the code within it and put its own little unique spin on it (Stack Overflow) 
   Instance: "Refers to the relationship of an object to its class" (Stack Overflow) 
   Class: "Blueprint you use to create objects" (Stack Overflow) 
   In my own words: 
       Class gets created first. Example Vehicle:🚘(A blueprint of a vehicle) 
        There are many different types of vehicles 🏎️🏎🚙🚓🚔🚗🚃. These are objects or instances of a class
        When creating an object 🚙 the object 🚙 needs its own attrubutes (like color, type, speed)  
        That's where the constructor 👷 comes in
        When an object 🚙 is initialized, it sends its attribute requests to the constructor 👷 (self, name, amount etc.) 
        The object 🚙 is telling the constructor 👷 what details it needs to go from blueprint to SUV 🚙. 
        The constructor 👷 then combines:
            The blueprints of the class 🚘 (Vehicle) 
            with the custom detail requests of the object 🚙 (SUV) 
            to create the desired result like a little makeover 💄💅✨
        ✨✨✨ Gives the class some pizzazz ✨✨✨
        If eveything goes well... 👷📝📲⚙️🗣️🏗️🚧✨💅💄 
            You have a fully built object 🚙 (SUV) that
                Reads code from the class 🔎
                Applies its attributes ✨🚙
                And performs the function it was built for (Honk, stop, take the family on vacation) 
        */ 


