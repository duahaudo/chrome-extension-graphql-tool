const param1 = JSON.stringify([
  {
    "name": "CaseNote",
    "title": "Case Notes",
    "attachment": {
      "view": false,
      "create": false,
      "remove": false
    }
  },
  {
    "name": "Assessment",
    "title": "Assessments",
    "attachment": {
      "view": false,
      "create": false,
      "remove": false
    }
  },
  {
    "name": "Risk",
    "title": "Risk",
    "attachment": {
      "view": false,
      "create": false,
      "remove": false
    }
  },
  {
    "name": "Medication",
    "title": "Medications",
    "attachment": {
      "view": false,
      "create": false,
      "remove": false
    }
  },
  {
    "name": "GoalAchievementPlan",
    "title": "Goal Achievement Plans",
    "attachment": {
      "view": false,
      "create": false,
      "remove": false
    },
    "nested": [
      {
        "name": "GoalAndOutcome",
        "title": "Goal And Outcome",
        "lookup": "PlanId",
        "attachment": {
          "view": false,
          "create": false,
          "remove": false
        }
      }
    ]
  },
  {
    "name": "HealthCondition",
    "title": "Health Conditions",
    "attachment": {
      "view": false,
      "create": false,
      "remove": false
    }
  },
  {
    "name": "PersonalIdentifier",
    "title": "Personal Identifiers",
    "attachment": {
      "view": false,
      "create": false,
      "remove": false
    }
  },
  {
    "name": "PersonalSupportPlan",
    "title": "Personal Support Plan",
    "attachment": {
      "view": false,
      "create": false,
      "remove": false
    }
  }
]).replace(/"/g, '\\"');

export default `
















# Keyboard shortcuts:
#
#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#     Merge Query:  Shift-Ctrl-M (or press the merge button above)
#       Run Query:  Ctrl-Enter (or press the play button above)
#   Auto Complete:  Ctrl-Space (or just start typing)
#

# query asyncJob {
#   asyncJob(filter: "Type == 'ClientDetailForm'") {
#     edges {
#       node {
#         UID
#         Name
#         Param1
#         Title
#         Type
#       }
#     }
#   }
# }
# mutation insertAssyncJob {
#   schema {
#     insertAsyncJob(input: {
#       Status: "Active",
#       Type:"ClientDetailForm",
#       Title:"ClientDetailFormSettings",
#       Param1: "${param1}"
#     })
#   }
# }

# query setting {
#   skedCustomFormFieldSetting(filter: "Category == 'BillableTravelForm'") {
#     edges {
#       node {
#         Name
#         DefaultValue
#       }
#     }
#   }
# }
# mutation insertSetting {
#   schema {
#     i1: insertSkedCustomFormFieldSetting(input: {
#       Name: "Additional_Travel_Costs",
#       Category: "BillableTravelForm",
#       IsVisible: true,
#       IsEditable: false,
#       IsRequired: false
#     })
#     i2: insertSkedCustomFormFieldSetting(input: {
#       Name: "Additional_Transport_Costs",
#       Category: "BillableTravelForm",
#       IsVisible: true,
#       IsEditable: false,
#       IsRequired: false
#     })
#   }
# }
# `