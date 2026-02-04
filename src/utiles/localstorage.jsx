
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "emp1@mail.com",
    password: "1234",
    taskNumber: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 3
    },
    tasks: [
      {
        title: "Design landing page",
        description: "Create hero section UI",
        date: "2026-02-01",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Fix navbar bug",
        description: "Resolve mobile overflow issue",
        date: "2026-01-28",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Write docs",
        description: "Component usage documentation",
        date: "2026-01-30",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Amit",
    email: "emp2@mail.com",
    password: "1234",
    taskNumber: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 3
    },
    tasks: [
      {
        title: "API integration",
        description: "Connect auth API",
        date: "2026-02-02",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "DB cleanup",
        description: "Remove unused tables",
        date: "2026-01-27",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Optimize queries",
        description: "Improve response time",
        date: "2026-01-29",
        category: "Performance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Suresh",
    email: "emp3@mail.com",
    password: "1234",
    taskNumber: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        title: "Create test cases",
        description: "Login module testing",
        date: "2026-02-03",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Bug verification",
        description: "Re-test fixed bugs",
        date: "2026-01-26",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Automation setup",
        description: "Setup Cypress",
        date: "2026-01-25",
        category: "Automation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "emp4@mail.com",
    password: "1234",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Content update",
        description: "Update website text",
        date: "2026-02-01",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO audit",
        description: "Fix meta tags",
        date: "2026-01-24",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Keyword research",
        description: "Find new keywords",
        date: "2026-01-23",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikas",
    email: "emp5@mail.com",
    password: "1234",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Deploy app",
        description: "Production deployment",
        date: "2026-02-04",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server monitoring",
        description: "Check server logs",
        date: "2026-01-22",
        category: "Monitoring",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "CI pipeline",
        description: "Fix build failure",
        date: "2026-01-21",
        category: "CI/CD",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = [
  {
    id: 0,
    email: "admin@mail.com",
    password: "admin"
  }
]


 localStorage.clear()
 export const SetLocalStorage = ()=>{
localStorage.setItem("employees", JSON.stringify(employees))
localStorage.setItem("admin", JSON.stringify(admin))
 }

 export const getLocalStorage = ()=>{
const employees=JSON.parse(localStorage.getItem("employees"))
const admin=JSON.parse(localStorage.getItem("admin"))

 return {employees,admin}

 }

