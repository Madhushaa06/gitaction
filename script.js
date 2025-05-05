function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task) {
      const li = document.createElement("li");
      li.textContent = task;
      li.onclick = () => li.classList.toggle("done");
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  }
  
  function setReminder() {
    const note = document.getElementById("reminderText").value;
    const time = document.getElementById("reminderTime").value;
    const message = document.getElementById("reminderMessage");
  
    if (!note || !time) {
      message.textContent = "Please fill in both fields!";
      return;
    }
  
    const now = new Date();
    const [h, m] = time.split(":");
    const reminderTime = new Date();
    reminderTime.setHours(h, m, 0);
  
    const timeDiff = reminderTime - now;
  
    if (timeDiff > 0) {
      message.textContent = `Reminder set for ${time}: ${note}`;
      setTimeout(() => alert(`🔔 Reminder: ${note}`), timeDiff);
    } else {
      alert("⏰ Reminder time must be in the future!");
    }
  }
