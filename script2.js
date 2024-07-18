document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    function handleScroll() {
        const scrollPosition = window.scrollY;
        sections.forEach((section, index) => {
            if (section.offsetTop <= scrollPosition + 60 && section.offsetTop + section.offsetHeight > scrollPosition + 60) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  
  function showEmployeeForm() {
    document.getElementById('employeeForm').style.display = 'block';
  }
  
  function hideEmployeeForm() {
    document.getElementById('employeeForm').style.display = 'none';
  }
  
  function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const position = document.getElementById('employeePosition').value;
  
    if (name && position) {
        const employeeList = document.getElementById('employeeList');
        const newEmployee = document.createElement('li');
        newEmployee.textContent = `${name} - ${position}`;
        employeeList.appendChild(newEmployee);
  
        document.getElementById('employeeName').value = '';
        document.getElementById('employeePosition').value = '';
        hideEmployeeForm();
    } else {
        alert('Please fill in all fields.');
    }
  }
  
  function showProjectForm() {
    document.getElementById('projectForm').style.display = 'block';
  }
  
  function hideProjectForm() {
    document.getElementById('projectForm').style.display = 'none';
  }
  
  function addProject() {
    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
  
    if (name && description) {
        const projectList = document.getElementById('projectList');
        const newProject = document.createElement('li');
        newProject.textContent = `${name} - ${description}`;
        projectList.appendChild(newProject);
  
        document.getElementById('projectName').value = '';
        document.getElementById('projectDescription').value = '';
        hideProjectForm();
    } else {
        alert('Please fill in all fields.');
    }
  }
  