    document.getElementById("year").textContent = new Date().getFullYear();

    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function loadTasks() {
      const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
      saved.forEach(t => addTaskToDOM(t));
    }

    function addTask() {
      const text = taskInput.value.trim();
      if (!text) return;
      addTaskToDOM(text);
      saveTask(text);
      taskInput.value = "";
    }

    function addTaskToDOM(text) {
      const li = document.createElement("li");
      li.textContent = text;
      li.style.padding = ".4rem 0";
      li.style.borderBottom = "1px solid rgba(255,255,255,.1)";
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.alignItems = "center";

      const del = document.createElement("button");
      del.textContent = "✕";
      del.style.background = "transparent";
      del.style.border = "0";
      del.style.color = "var(--muted)";
      del.style.fontSize = "1rem";
      del.style.cursor = "pointer";
      del.onclick = () => {
        li.remove();
        removeTask(text);
      };

      li.appendChild(del);
      taskList.appendChild(li);
    }

    function saveTask(text) {
      const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
      saved.push(text);
      localStorage.setItem("tasks", JSON.stringify(saved));
    }

    function removeTask(text) {
      const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updated = saved.filter(t => t !== text);
      localStorage.setItem("tasks", JSON.stringify(updated));
    }

    loadTasks();