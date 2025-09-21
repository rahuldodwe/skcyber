// Dummy API for Government Job Notifications
export const govtJobsApi = {
  // Mock government job results data
  getGovtJobResults: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: [
            {
              title: "UPSC Civil Services (Prelims) Result 2024",
              description: "UPSC Civil Services (Prelims) Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "SSC CGL Tier 1 Result 2024",
              description: "SSC CGL Tier 1 Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "Railway Group D Result 2024",
              description: "Railway Group D Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "IBPS PO Mains Result 2024",
              description: "IBPS PO Mains Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "SBI Clerk Mains Result 2024",
              description: "SBI Clerk Mains Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "RRB NTPC CBT 2 Result 2024",
              description: "RRB NTPC CBT 2 Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "Defence Services (CDS) Result 2024",
              description: "Defence Services (CDS) Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "SSC CHSL Tier 2 Result 2024",
              description: "SSC CHSL Tier 2 Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "IBPS RRB Officer Scale 1 Result 2024",
              description: "IBPS RRB Officer Scale 1 Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "Railway ALP CBT 2 Result 2024",
              description: "Railway ALP CBT 2 Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "SSC JE Paper 2 Result 2024",
              description: "SSC JE Paper 2 Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "IBPS SO Mains Result 2024",
              description: "IBPS SO Mains Result 2024 Description Here ... Please read the description carefully.",
            },

            {
              title: "RRB Group D CBT 2 Result 2024",
              description: "RRB Group D CBT 2 Result 2024 Description Here ... Please read the description carefully.",
            },
       
          ]
        });
      }, 1000);
    });
  },

  // Mock government job admit cards data
  getGovtJobAdmitCards: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: [
            {
              title: "UPSC Civil Services (Mains) Admit Card 2024",
              href: "https://example.com/upsc-mains-admit-2024"
            },

            {
              title: "SSC CGL Tier 1 Admit Card 2024",
              href: "https://example.com/ssc-cgl-tier1-admit-2024"
            },

            {
              title: "Railway Group D Admit Card 2024",
              href: "https://example.com/railway-group-d-admit-2024"
            },

            {
              title: "IBPS PO Mains Admit Card 2024",
              href: "https://example.com/ibps-po-mains-admit-2024"
            },

            {
              title: "SBI Clerk Mains Admit Card 2024",
              href: "https://example.com/sbi-clerk-mains-admit-2024"
            },

            {
              title: "RRB NTPC CBT 2 Admit Card 2024",
              href: "https://example.com/rrb-ntpc-cbt2-admit-2024"
            },

            {
              title: "Defence Services (CDS) Admit Card 2024",
              href: "https://example.com/cds-admit-2024"
            },

            {
              title: "SSC CHSL Tier 2 Admit Card 2024",
              href: "https://example.com/ssc-chsl-tier2-admit-2024"
            },

            {
              title: "IBPS RRB Officer Scale 1 Admit Card 2024",
              href: "https://example.com/ibps-rrb-officer-admit-2024"
            },

            {
              title: "Railway ALP CBT 2 Admit Card 2024",
              href: "https://example.com/railway-alp-cbt2-admit-2024"
            },

            {
              title: "SSC JE Paper 2 Admit Card 2024",
              href: "https://example.com/ssc-je-paper2-admit-2024"
            },

            {
              title: "IBPS SO Mains Admit Card 2024",
              href: "https://example.com/ibps-so-mains-admit-2024"
            },

            {
              title: "RRB Group D CBT 2 Admit Card 2024",
              href: "https://example.com/rrb-group-d-cbt2-admit-2024"
            },

            {
              title: "SSC CPO SI Admit Card 2024",
              href: "https://example.com/ssc-cpo-si-admit-2024"
            },
          
          ]
        });
      }, 1200);
    });
  },

  // Mock government job latest notifications data
  getGovtJobLatestNotifications: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: [
            {
              title: "UPSC Civil Services 2025 Notification",
              description: "UPSC Civil Services 2025 Notification Description Here ... Please read the description carefully.",
              importantDate: {
                onlineApplyStartDate: "2025-01-01",
                onlineApplyLastDate: "2025-01-01",
                lastDateForFeePayment: "2025-01-01",
                admitCardReleaseDate: "2025-01-01",
                examDate: "2025-01-01",
                resultDate: "2025-01-01",
              },
              applcationFee: {
                all: "1000",
                scStOBC: "500",
                general: "1500",
              },
              ageLimit: {
                all: "18-30",
                scStOBC: "18-30",
                general: "18-30",
              },
              totalVacancy: 100,
              vacancyDetail: {
                postName: "Post Name",
                noOfPost: 100,
                eligibilityCriteria: [
                  "UG from recognized university",
                  "PG from recognized university",
                  "Diploma in Computer Application",
                ],
                howToFillForm: {
                  step1: "Step 1",
                  step2: "Step 2",
                  step3: "Step 3",
                  step4: "Step 4",
                  step5: "Step 5",
                },
                modeOfSelection: [
                  "written exam",
                  "interview",
                  "CBT Exam",
                ],
              },
            },

            {
              title: "SSC CGL 2025 Notification",
              description: "SSC CGL 2025 Notification Description Here ... Please read the description carefully.",
              importantDate: {
                onlineApplyStartDate: "2025-01-01",
                onlineApplyLastDate: "2025-01-01",
                lastDateForFeePayment: "2025-01-01",
                admitCardReleaseDate: "2025-01-01",
                examDate: "2025-01-01",
                resultDate: "2025-01-01",
              },
              applcationFee: {
                all: "1000",
                scStOBC: "500",
                general: "1500",
              },
              ageLimit: {
                all: "18-30",
                scStOBC: "18-30",
                general: "18-30",
              },
              totalVacancy: 100,
              vacancyDetail: {
                postName: "Post Name",
                noOfPost: 100,
                eligibilityCriteria: [
                  "UG from recognized university",
                  "PG from recognized university",
                  "Diploma in Computer Application",
                ],
              },
              howToFillForm: {
                step1: "Step 1",
                step2: "Step 2",
                step3: "Step 3",
                step4: "Step 4",
                step5: "Step 5",
              },
              modeOfSelection: [
                "written exam",
                "interview",
                "CBT Exam",
              ],
            },
            {
              title: "Railway Group D 2025 Notification",
              description: "Railway Group D 2025 Notification Description Here ... Please read the description carefully.",
              importantDate: {
                onlineApplyStartDate: "2025-01-01",
                onlineApplyLastDate: "2025-01-01",
                lastDateForFeePayment: "2025-01-01",
                admitCardReleaseDate: "2025-01-01",
                examDate: "2025-01-01",
                resultDate: "2025-01-01",
              },
              applcationFee: {
                all: "1000",
                scStOBC: "500",
                general: "1500",
              },
              ageLimit: {
                all: "18-30",
                scStOBC: "18-30",
                general: "18-30",
              },
              totalVacancy: 100,
              vacancyDetail: {
                postName: "Post Name",
                noOfPost: 100,
                eligibilityCriteria: [
                  "UG from recognized university",
                  "PG from recognized university",
                  "Diploma in Computer Application",
                ],
              },
              howToFillForm: {
                step1: "Step 1",
                step2: "Step 2",
                step3: "Step 3",
                step4: "Step 4",
                step5: "Step 5",
              },
              modeOfSelection: [
                "written exam",
                "interview",
                "CBT Exam",
              ],
            },

            {
              title: "IBPS PO 2025 Notification",
              description: "IBPS PO 2025 Notification Description Here ... Please read the description carefully.",
              importantDate: {
                onlineApplyStartDate: "2025-01-01",
                onlineApplyLastDate: "2025-01-01",
                lastDateForFeePayment: "2025-01-01",
                admitCardReleaseDate: "2025-01-01",
                examDate: "2025-01-01",
                resultDate: "2025-01-01",
              },
              applcationFee: {
                all: "1000",
                scStOBC: "500",
                general: "1500",
              },
              ageLimit: {
                all: "18-30",
                scStOBC: "18-30",
                general: "18-30",
              },
              totalVacancy: 100,
              vacancyDetail: {
                postName: "Post Name",
                noOfPost: 100,
                eligibilityCriteria: [
                  "UG from recognized university",
                  "PG from recognized university",
                  "Diploma in Computer Application",
                ],
              },
              howToFillForm: {
                step1: "Step 1",
                step2: "Step 2",
                step3: "Step 3",
                step4: "Step 4",
                step5: "Step 5",
              },
              modeOfSelection: [
                "written exam",
                "interview",
                "CBT Exam",
              ],
            },

            {
              title: "SBI Clerk 2025 Notification",
              description: "SBI Clerk 2025 Notification Description Here ... Please read the description carefully.",
              importantDate: {
                onlineApplyStartDate: "2025-01-01",
                onlineApplyLastDate: "2025-01-01",
                lastDateForFeePayment: "2025-01-01",
                admitCardReleaseDate: "2025-01-01",
                examDate: "2025-01-01",
                resultDate: "2025-01-01",
              },
              applcationFee: {
                all: "1000",
                scStOBC: "500",
                general: "1500",
              },
              ageLimit: {
                all: "18-30",
                scStOBC: "18-30",
                general: "18-30",
              },
              totalVacancy: 100,
              vacancyDetail: {
                postName: "Post Name",
                noOfPost: 100,
                eligibilityCriteria: [
                  "UG from recognized university",
                  "PG from recognized university",
                  "Diploma in Computer Application",
                ],
              },
              howToFillForm: {
                step1: "Step 1",
                step2: "Step 2",
                step3: "Step 3",
                step4: "Step 4",
                step5: "Step 5",
              },
              modeOfSelection: [
                "written exam",
                "interview",
                "CBT Exam",
              ],
            },

            {
              title: "RRB NTPC 2025 Notification",
              description: "RRB NTPC 2025 Notification Description Here ... Please read the description carefully.",
              importantDate: {
                onlineApplyStartDate: "2025-01-01",
                onlineApplyLastDate: "2025-01-01",
                lastDateForFeePayment: "2025-01-01",
                admitCardReleaseDate: "2025-01-01",
                examDate: "2025-01-01",
                resultDate: "2025-01-01",
              },
              applcationFee: {
                all: "1000",
                scStOBC: "500",
                general: "1500",
              },
              ageLimit: {
                all: "18-30",
                scStOBC: "18-30",
                general: "18-30",
              },
              totalVacancy: 100,
              vacancyDetail: {
                postName: "Post Name",
                noOfPost: 100,
                eligibilityCriteria: [
                  "UG from recognized university",
                  "PG from recognized university",
                  "Diploma in Computer Application",
                ],
              },
              howToFillForm: {
                step1: "Step 1",
                step2: "Step 2",
                step3: "Step 3",
                step4: "Step 4",
                step5: "Step 5",
              },
              modeOfSelection: [
                "written exam",
                "interview",
                "CBT Exam",
              ],
            },

            {
              title: "Defence Services (CDS) 2025 Notification",
              description: "Defence Services (CDS) 2025 Notification Description Here ... Please read the description carefully.",
              importantDate: {
                onlineApplyStartDate: "2025-01-01",
                onlineApplyLastDate: "2025-01-01",
                lastDateForFeePayment: "2025-01-01",
                admitCardReleaseDate: "2025-01-01",
                examDate: "2025-01-01",
                resultDate: "2025-01-01",
              },
              applcationFee: {
                all: "1000",
                scStOBC: "500",
                general: "1500",
              },
              ageLimit: {
                all: "18-30",
                scStOBC: "18-30",
                general: "18-30",
              },
              totalVacancy: 100,
              vacancyDetail: {
                postName: "Post Name",
                noOfPost: 100,
                eligibilityCriteria: [
                  "UG from recognized university",
                  "PG from recognized university",
                  "Diploma in Computer Application",
                ],
              },
              howToFillForm: {
                step1: "Step 1",
                step2: "Step 2",
                step3: "Step 3",
                step4: "Step 4",
                step5: "Step 5",
              },
              modeOfSelection: [
                "written exam",
                "interview",
                "CBT Exam",
              ],
            },

            {
              title: "SSC CHSL 2025 Notification",
              description: "SSC CHSL 2025 Notification Description Here ... Please read the description carefully.",
              importantDate: {
                onlineApplyStartDate: "2025-01-01",
                onlineApplyLastDate: "2025-01-01",
                lastDateForFeePayment: "2025-01-01",
                admitCardReleaseDate: "2025-01-01",
                examDate: "2025-01-01",
                resultDate: "2025-01-01",
              },
              applcationFee: {
                all: "1000",
                scStOBC: "500",
                general: "1500",
              },
              ageLimit: {
                all: "18-30",
                scStOBC: "18-30",
                general: "18-30",
              },
              totalVacancy: 100,
              vacancyDetail: {
                postName: "Post Name",
                noOfPost: 100,
                eligibilityCriteria: [
                  "UG from recognized university",
                  "PG from recognized university",
                  "Diploma in Computer Application",
                ],
              },
              howToFillForm: {
                step1: "Step 1",
                step2: "Step 2",
                step3: "Step 3",
                step4: "Step 4",
                step5: "Step 5",
              },
              modeOfSelection: [
                "written exam",
                "interview",
                "CBT Exam",
              ],
            },

          ]
        });
      }, 800);
    });
  }
};
