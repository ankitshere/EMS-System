
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
        description: "Create an engaging hero section with modern UI elements, animations, and responsive design for the website homepage",
        date: "2026-02-01",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Fix navbar bug",
        description: "Resolve the horizontal overflow issue in mobile navigation menu that causes layout breaking on smaller screens",
        date: "2026-01-28",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Write docs",
        description: "Prepare comprehensive documentation covering component props, usage examples, and best practices for the development team",
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
        description: "Connect the authentication API endpoints with proper error handling, token management, and session persistence",
        date: "2026-02-02",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "DB cleanup",
        description: "Remove deprecated database tables and optimize schema structure to improve overall database performance",
        date: "2026-01-27",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Optimize queries",
        description: "Refactor slow database queries by adding proper indexes and improving query logic to reduce response time",
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
        description: "Design and implement comprehensive test cases for the login module covering all edge cases and user scenarios",
        date: "2026-02-03",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Bug verification",
        description: "Thoroughly re-test all previously reported bugs to verify fixes are working correctly across different environments",
        date: "2026-01-26",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Automation setup",
        description: "Configure Cypress testing framework with proper folder structure, base configurations, and initial test suites",
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
        description: "Review and update all website copy including headings, descriptions, and call-to-action buttons for better engagement",
        date: "2026-02-01",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO audit",
        description: "Conduct comprehensive SEO audit and fix all meta tags, alt texts, and structured data for improved search rankings",
        date: "2026-01-24",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Keyword research",
        description: "Perform detailed keyword research using SEO tools to identify high-value keywords for content optimization strategy",
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
        description: "Execute production deployment with proper environment configuration, health checks, and rollback strategy in place",
        date: "2026-02-04",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server monitoring",
        description: "Review server logs, analyze error patterns, and set up alerts for critical issues to ensure system reliability",
        date: "2026-01-22",
        category: "Monitoring",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "CI pipeline",
        description: "Debug and resolve the continuous integration pipeline build failures by fixing dependency and configuration issues",
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
    password: "123"
  }
]



export const SetLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
  }
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  return { employees, admin }
}