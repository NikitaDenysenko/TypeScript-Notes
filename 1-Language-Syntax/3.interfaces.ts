interface Job {
    jobTitle: string,
    jobExperience: number
}

interface Person extends Job{
    readonly id: number,
    name: string,
    age: number,
    sayHello(name: string): void
}

const person: Person = {
    id: 320,
    name: 'Nick',
    age: 20,
    sayHello(personName: string) {
        console.log(`Hello, my name is ${personName}`)
    },
    jobTitle: 'Software Engeneer',
    jobExperience: 3
}