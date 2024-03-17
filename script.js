function selectPlan(planNumber) {
const planId = "plan" + planNumber

const allPlans = document.querySelectorAll(".plan")
    allPlans.forEach(plan => {
        if (plan.id === planId) {
            plan.classList.add("plan--selected")
        } else {
            plan.classList.remove("plan--selected")
        }
    } )

  }

  selectPlan(3)
  