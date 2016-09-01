import { Question } from './question';

export var QUESTIONS: Question[] = [
	{"id" : 1,  "categoryId": "DP",
	"question": "What is OCP?",
	"answer": `OCP stands for Open Closed Principle.<br><br>
	In object-oriented programming, the open/closed principle states software entities (classes, modules, functions, etc.)  should
	be open for extension, but closed for modification. <br><br>Such an entity can allow its behaviour to be extended without modifying its source code.` },
	{"id" : 2,  "categoryId": "M",
	"question" : "What is SWOT analysis?",
	"answer": `SWOT is a structured planning method that evaluates those four elements of a project or business venture.<br><br>
	Strengths: characteristics of the business or project that give it an advantage over others<br><br>
Weaknesses: characteristics that place the business or project at a disadvantage relative to others<br><br>
Opportunities: elements that the business or project could exploit to its advantage<br><br>
Threats: elements in the environment that could cause trouble for the business or project`},
	{"id" : 3, "categoryId": "JAVA",
	"question" : "What is the difference between set and list?",
	"answer": `A LIST is an ordered collection (also known as a sequence).
	The user of this interface has precise control over where in the list each element is inserted.
	The user can access elements by their integer index (position in the list), and search for elements in the list.<br><br>
	A SET is collection that contains no duplicate elements. More formally, sets contain no pair of elements e1 and e2 such that e1.equals(e2),
	and at most one null element. As implied by its name, this interface models the mathematical set abstraction.`},
	{"id" : 4, "categoryId":"SQL",
	"question" : "What is optimistic locking?",
	"answer": `Optimistic Locking is a strategy where you read a record, take note of a version number (other methods to do this involve dates,
		timestamps or checksums/hashes) and check that the version hasn't changed before you write the record back.` },
	{"id" : 5, "categoryId":"SQL",
	"question" : "What is pessimistic locking?",
	"answer": `Pessimistic Locking is when you lock the record for your exclusive use until you have finished with it. <br>
	It has much better integrity than optimistic locking but requires you to be careful with your application design to avoid Deadlocks.` },
	{"id" : 6, "categoryId": "JS", "question" : "Question 5?", "answer": "Answer 5"},
	{"id" : 7, "categoryId": "FRAMEWORKS", "question" : "What is OSGI?", "answer": `OSGi (Open Service Gateway Initiative) is a Java framework for developing and
	deploying modular software programs and libraries.Each bundle is a tightly coupled, dynamically loadable collection of classes, jars, and configuration files
	that explicitly declare their external dependencies (if any).<br><br> A bundle is a group of Java classes and additional resources equipped with a detailed manifest
	MANIFEST.MF file on all its contents, as well as additional services needed to give the included group of Java classes more sophisticated behaviors,
	to the extent of deeming the entire aggregate a component.<br><br>Below is an example of a typical MANIFEST.MF file with OSGi Headers:<br><br>
	Bundle-Name: Hello World<br>
	Bundle-SymbolicName: org.wikipedia.helloworld<br>
	Bundle-Description: A Hello World bundle<br>
	Bundle-ManifestVersion: 2<br>
	Bundle-Version: 1.0.0<br>
	Bundle-Activator: org.wikipedia.Activator<br>
	Export-Package: org.wikipedia.helloworld;version="1.0.0"<br>
	Import-Package: org.osgi.framework;version="1.3.0"`},
	{"id" : 9, "categoryId":"SQL",
	"question" : "What is ACID?",
	"answer": `In computer science, ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions.<br>
	In the context of databases, a single logical operation on the data is called a transaction. <br><br>
	Atomicity requires that each transaction be "all or nothing": if one part of the transaction fails, then the entire transaction fails, and the database state is left unchanged.
	An atomic system must guarantee atomicity in each and every situation, including power failures, errors, and crashes. To the outside world, a committed transaction appears
	(by its effects on the database) to be indivisible ("atomic"), and an aborted transaction does not happen.<br><br>
	The consistency property ensures that any transaction will bring the database from one valid state to another. Any data written to the database must be valid according
	 to all defined rules, including constraints, cascades, triggers, and any combination thereof. This does not guarantee correctness of the transaction in all ways the
	 application programmer might have wanted (that is the responsibility of application-level code) but merely that any programming errors cannot result in the violation of
	 any defined rules.<br><br>
	 The isolation property ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially,
	  i.e., one after the other. Providing isolation is the main goal of concurrency control. Depending on the concurrency control method (i.e., if it uses strict -
	as opposed to relaxed - serializability), the effects of an incomplete transaction might not even be visible to another transaction.<br><br>
	The durability property ensures that once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors. In a relational database,
	for instance, once a group of SQL statements execute, the results need to be stored permanently (even if the database crashes immediately thereafter). To defend against power loss,
	transactions (or their effects) must be recorded in a non-volatile memory.`
},
{"id" : 10, "categoryId":"SQL",
"question" : "Explain CAP theorem.",
"answer": `The cap theorem states that it is impossible for a distributed computer system to simultaneously provide all three of the following guarantees:<br><br>
Consistency (all nodes see the same data at the same time)<br><br>
Availability (every request receives a response about whether it succeeded or failed)<br><br>
Partition tolerance (the system continues to operate despite arbitrary partitioning due to network failures)<br><br>`
},
{"id" : 11, "categoryId":"FRAMEWORKS",
"question" : "Detail how Eclipse RCP works.",
"answer": `The Eclipse Rich Client Platform (or RCP for short) is most commonly thought of as a UI framework, and many teams adopt RCP because it offers a way to quickly
develop client-side applications. <br><br>
The first thing to understand is that RCP is not a single framework, but a collection of lower-level frameworks. Most technologies rely on other lower-level technologies,
and RCP is no different. Specifically, RCP leverages:<br><br>
OSGi – At the lowest level, all RCP applications run on top of an OSGi framework. This is extremely important and I’ll discuss why a bit later on.<br><br>
SWT – The Standard Widget Toolkit provides the primitive widgets (text controls, radio buttons, etc.) used to create RCP user interfaces.
It functions much like AWT in a traditional Swing application.<br><br>
JFace – Building on top of SWT, JFace provides a variety of advanced UI functionality including wizards, preference pages, data binding and much more.`
},
{"id" : 12, "categoryId":"DP",
"question" : "Explain SOLID.",
"answer": `S.O.L.I.D STANDS FOR:<br>
S – Single-responsiblity principle : A class should have one and only one reason to change, meaning that a class should have only one job.<br><br>
O – Open-closed principle : Objects or entities should be open for extension, but closed for modification.<br><br>
L – Liskov substitution principle : Every subclass/derived class should be substitutable for their base/parent class.<br><br>
I – Interface segregation principle :A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods
they do not use.<br><br>
D – Dependency Inversion Principle : Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module,
but they should depend on abstractions.
`},
{"id" : 13, "categoryId":"JAVA",
"question" : "Write a thread safe singleton class",
"answer": `
public class CrunchifySingleton {<br>
	private static CrunchifySingleton instance = null;<br>
	protected CrunchifySingleton() {}<br>

	// Lazy Initialization (If required then only)<br>
	public static CrunchifySingleton getInstance() {<br>
		if (instance == null) {<br>
			// Thread Safe. Might be costly operation in some case<br>
			synchronized (CrunchifySingleton.class) {<br>
				if (instance == null) {<br>
					instance = new CrunchifySingleton();}<br>
			}<br>
		}<br>
		return instance;<br>
	}<br>
}<br><br>`
},
{"id" : 14, "categoryId":"TECHNOLOGIES",
"question" : "What is SAML",
"answer": `Security Assertion Markup Language (SAML) is an XML standard that allows secure web domains to exchange user authentication and authorization data.<br>
 Using SAML, an online service provider can contact a separate online identity provider to authenticate users who are trying to access secure content.<br>`
},
{"id" : 15, "categoryId":"SQL",
"question" : "Types of relational inheritance mapping",
"answer": `1.Table Per Hierarchy : In table per hierarchy mapping, single table is required to map the whole hierarchy,
an extra column (known as discriminator column) is added to identify the class. But nullable values are stored in the table . <br>
Ex: <br>
@Entity  <br>
@Table(name = "employee101")  <br>
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)  <br>
@DiscriminatorColumn(name="type",discriminatorType=DiscriminatorType.STRING)  <br>
@DiscriminatorValue(value="employee")  <br>
public class Employee   <br><br>
2. Table Per Concrete class  : In case of table per concrete class, tables are created as per class. But duplicate column is added in subclass tables.<br><br>
3. Table Per Subclass : In this strategy, tables are created as per class but related by foreign key. So there are no duplicate columns. `
},
{"id" : 16, "categoryId":"DP",
"question" : "Decorator design pattern",
"answer": `Decorator design pattern is used to enhance the functionality of a particular object at run-time or dynamically.<br><br>
Decorator design pattern which is used in various Java IO classes: BufferedReader and BufferedWriter which enhances Reader and Writer objects to perform Buffer
 level reading and writing for improved performance`
},
{"id" : 17, "categoryId":"DP",
"question" : "Strategy design pattern",
"answer": `Strategy pattern in quite useful for implementing set of related algorithms e.g. compression algorithms, filtering strategies etc. <br><br>
Strategy design pattern allows you to create Context classes, which uses Strategy implementation classes for applying business rules.
This pattern follow open closed design principle and quite useful in Java. <br>
One example of Strategy pattern from JDK itself is a Collections.sort() method and Comparator interface, which is a strategy interface and defines strategy for comparing objects. <br>
Because of this pattern, we don't need to modify sort() method (closed for modification) to compare any object, at same time we can implement Comparator interface
to define new comparing strategy (open for extension).
`},
{"id" : 18, "categoryId":"JAVA",
"question" : "Parameters passed by value or by reference?",
"answer": `Java is always pass by value, with no exceptions, ever.<br><br>
So how is it that anyone can be at all confused by this, and believe that Java is pass by reference, or think they have an example of Java
acting as pass by reference? The key point is that Java never provides direct access to the values of objects themselves, in any circumstances.
The only access to objects is through a reference to that object. Because Java objects are always accessed through a reference, rather than directly,
it is common to talk about fields and variables and method arguments as being objects, when pedantically they are only references to objects.
 The confusion stems from this (strictly speaking, incorrect) change in nomenclature.<br><br>
So, when calling a method<br><br>
For primitive arguments (int, long, etc.), the pass by value is the actual value of the primitive (for example, 3).<br>
For objects, the pass by value is the value of the reference to the object.<br>
So if you have doSomething(foo) and public void doSomething(Foo foo) { .. } the two Foos have copied references that point to the same objects.<br>
Naturally, passing by value a reference to an object looks very much like (and is indistinguishable in practice from) passing an object by reference.<br><br>`
},
{"id" : 19, "categoryId":"ALGO",
"question" : "Determine if a number is power of 2",
"answer": `bool IsPowerOfTwo(ulong x)<br>
{<br>
    return (x & (x - 1)) == 0;<br>
}<br>
For completeness, zero is not a power of two. If you want to take into account that edge case, here's how:<br>
bool IsPowerOfTwo(ulong x)<br>
{<br>
    return (x != 0) && ((x & (x - 1)) == 0);<br>
}<br>
Binary & operators are predefined for the integral types and bool. For integral types, & computes the logical bitwise AND of its operands.
For bool operands, & computes the logical AND of its operands; that is, the result is true if and only if both its operands are true.
<br><br>`
},
{"id" : 20, "categoryId":"JAVA",
"question" : "What will happen if you put return statement or System.exit () on try or catch block? Will finally block execute?",
"answer": `Finally block will execute even if you put a return statement in the try block or catch block BUT finally block won't run if you call System.exit form try or catch.<br><br>`
},
{"id" : 21, "categoryId":"JAVA",
"question" : "What returns 1.0 / 0.0 ? Will it throw Exception? any compile time error?",
"answer": `The simple answer to this question is that it will not throw ArithmeticExcpetion and return Double.INFINITY. <br>
Also, note that the comparison x == Double.NaN always evaluates to false, even if x itself is a NaN. To test if x is a NaN, one should use the method call Double.isNaN(x) to check
if given number is NaN or not. If you know SQL, this is very close to NULL there.<br><br>`
},
{"id" : 22, "categoryId":"M",
"question" : "Types of UML diagrams",
"answer": `1. Structural : <br>
-Class diagram<br>
-Object diagram<br>
-Component Diagram Component diagrams show the organization and dependencies among a group of components. Component diagrams comprise of: Components, Interfaces,
Relationships, Packages and Subsystems (optional)<br>
-Deployment Diagram: A deployment diagram puts emphasis on the configuration of runtime processing nodes and their components that live on them.
They are commonly comprised of nodes and dependencies, or associations between the nodes.<br><br>
2. Behavioral <br>
-Use case diagrams :Use case diagrams present an outside view of the manner the elements in a system behave and how they can be used in the context.
Use case diagrams comprise of: Use cases, Actors,Relationships like dependency, generalization, and association<br>
-Sequence Diagrams Sequence diagrams are interaction diagrams that illustrate the ordering of messages according to time.<br>
-State–Chart Diagrams :A state–chart diagram shows a state machine that depicts the control flow of an object from one state to another.
A state machine portrays the sequences of states which an object undergoes due to events and their responses to events<br>
-Activity Diagrams : An activity diagram depicts the flow of activities which are ongoing non-atomic operations in a state machine.
Activities result in actions which are atomic operations.<br>
-Activity diagrams comprise of: Activity states and action states, Transitions, Objects<br>
-Activity diagrams are used for modeling: workflows as viewed by actors, interacting with the system.details of operations or computations using flowcharts.
<br>`
},
{"id" : 23, "categoryId":"FRAMEWORKS",
"question" : "Spring AOP components",
"answer": `What is the difference between concern and cross-cutting concern in Spring AOP?<br><br>
The Concern is behavior we want to have in a module of an application. A Concern may be defined as a functionality we want to implement.<br><br>
The cross-cutting concern is a concern which is applicable throughout the application and it affects the entire application.
For example, logging, security and data transfer are the concerns which are needed in almost every module of an application, hence they are cross-cutting concerns.<br><br>
The join point represents a point in an application where we can plug-in an AOP aspect. It is the actual place in the application where an action will be
taken using Spring AOP framework.<br><br>
The advice is the actual action that will be taken either before or after the method execution. This is actual piece of code that is invoked during the
program execution by the Spring AOP framework.<br><br>
Spring aspects can work with five kinds of advice:<br>
before: Run advice before the a method execution.<br>
after: Run advice after the a method execution regardless of its outcome.<br>
after-returning: Run advice after the a method execution only if method completes successfully.<br>
after-throwing: Run advice after the a method execution only if method exits by throwing an exception.<br>
around: Run advice before and after the advised method is invoked.<br><br>
The pointcut is a set of one or more joinpoints where an advice should be executed. You can specify pointcuts using expressions or patterns.<br><br>
An Introduction allows us to add new methods or attributes to existing classes.<br><br>
The target object is an object being advised by one or more aspects. It will always be a proxy object. It is also referred to as the advised object.<br><br>`
},
{"id" : 99999, "categoryId":"X",
"question" : "",
"answer": `<br><br>`
}

];
