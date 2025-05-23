export default {
	data: {
		"runners": [
			{
				"versioning": {
					"source": "milestones",
					"type": "SemVer"
				},
				"prereleaseName": "alpha",
				"issue": {
					"labels": {
						"Error Handling": {
							"conditions": [],
							"requires": 1
						},
						"Team Managers Pod": {
							"conditions": [
								{
									"label": "SSO",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "RBAC",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Audit Logs",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Airgap",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Enterprise Edition",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "SCIM",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Invite flow",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "User Profile",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Admin Settings",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Workspace settings",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "User Session ",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "User Session",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"New Developers Pod": {
							"conditions": [
								{
									"label": "Omnibar",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Telemetry",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Entity Explorer",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "IDE",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "i18n",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "IDE Navigation",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "In App Comms",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "App setting",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "IDE tabs",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"BE Coders Pod": {
							"conditions": [
								{
									"label": "Data Platform Pod",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Integrations Pod",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"FE Coders Pod": {
							"conditions": [
								{
									"label": "JS Linting & Errors",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Debugger",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Autocomplete",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Evaluated Value",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Slash Command",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "New JS Function",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "JS Usability",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "OnPageLoad",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Framework Functions",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "JS Objects",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "JS Evaluation",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Custom JS Libraries",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Action Selector",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Widget setter method",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Error Handling",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Entity Refactor",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"App Viewers Pod": {
							"conditions": [
								{
									"label": "Button Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Chart Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Container Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Date Picker Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Select Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "File Picker Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Form Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Image Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Input Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "List Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "MultiSelect Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Map Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Modal Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Radio Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Rich Text Editor Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Tab Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Table Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Text Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Video Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "iFrame",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Menu Button",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Rating",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Widget Validation",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "reallabel",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "New Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Switch widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Audio Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Icon Button Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Stat Box Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Voice Recorder Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Calendar Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Menu Button Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Divider Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Rating Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "View Mode",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Widget Property",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Document Viewer Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Radio Group Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Currency Input Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "TreeSelect",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "MultiTree Select Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Phone Input Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "JSON Form",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "All Widgets",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Button Group widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Progress bar widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Audio Recorder Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Camera Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Table Widget V2",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Branding",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Map Chart Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Code Scanner Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Widget keyboard accessibility",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "List Widget V2",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Slider Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "One-click Binding",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Old widget version",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Widget Discoverability",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Custom widgets",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Switch Group Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Checkbox Group widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Checkbox Widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Table Inline Edit",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "App Theming",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"UI Builders Pod": {
							"conditions": [
								{
									"label": "Property Pane",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Copy Paste",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Drag & Drop",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Undo/Redo",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Widgets Pane",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "UI Performance",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Widget Grouping",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Reflow & Resize",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Canvas / Grid",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Auto Height",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Browser specific",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Auto Layout",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Fixed layout",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "App Navigation",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"User Education Pod": {
							"conditions": [
								{
									"label": "Documentation",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"DevOps Pod": {
							"conditions": [
								{
									"label": "Docker",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Super Admin",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Deployment",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "K8s",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Email Config",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Backup & Restore",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "AWS AMI",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Observability",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Heroku",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "New Deployment Mode",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Supervisor",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Deployment Certificates",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Mock Data",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "AWS ECS",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Ingress",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Nginx",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Design System Pod": {
							"conditions": [
								{
									"label": "Design System Pod",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Component Issue",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Keyboard accessibility ",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Toggle button",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Category Token",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Component Documentation",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Migration",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Deduplication ",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Revamp",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Deduplication",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Unit Test",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Components",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Grayscale",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Design System",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Typography",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Visual Styles",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ADS Component Design",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Modal Component",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Data Platform Pod": {
							"conditions": [
								{
									"label": "Page load executions",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "DSL Update",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "File upload issues",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "DocumentDB",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Platformization",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Secret Management",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Publish App",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "AST-backend",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "AST-frontend",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Integrations Pod": {
							"conditions": [
								{
									"label": "File upload issues",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "DocumentDB",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "New Datasource",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Firestore",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Google Sheets",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Mongo",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Redshift",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "snowflake",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "S3",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Redis",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Postgres",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "GraphQL Plugin",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "ArangoDB",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "MsSQL",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Elastic Search",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "OAuth",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Airtable",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "CURL",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "DynamoDB",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Zendesk",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Hubspot",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Query Forms",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Twilio",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "MySQL",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Connection pool",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "MariaDB",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Integrations Pod General",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "SMTP plugin",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Oracle SQL DB",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Query filter",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Activation - datasources",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Onboarding",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Generate Page",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Sniping Mode",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "REST API",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Activation - learnability",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Datasources",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "REST API plugin",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Prepared statements",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Query Generation",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Core Query Execution",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Query Management",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Query Settings",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Query performance",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Datatype issue",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "SmartSubstitution",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Schema",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Suggested Widgets",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "SAAS Plugins",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Reconnect DS modal",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Git Pod": {
							"conditions": [
								{
									"label": "Git Version Control",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Import-Export-App",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Git Auto-commit",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Auto-commit",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Continuous Deployment",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Branch protection",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Default branch",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Git status",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Git performance",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "SDLC",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Custom environments",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Multiple Environments",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Datasource Environments",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Mobile Pod": {
							"conditions": [],
							"requires": 1
						},
						"Billing & Usage Pod": {
							"conditions": [
								{
									"label": "CE Instance",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Customer Portal",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Cloud Services",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Billing Integrations",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Billing",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Self Serve",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Enterprise Billing",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "In-app ramps",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Analytics Improvements",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Self Serve 1.0",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "License",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Appsmith Business Cloud",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "BE instance",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Embedding Apps",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "TM_BU",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Feature Flagging",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Invite flow",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Invite users",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Home Page",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "1-click upgrade",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Performance Pod": {
							"conditions": [
								{
									"label": "Performance",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Performance infra",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"IDE Pod": {
							"conditions": [
								{
									"label": "Preview mode",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "IDE Infra",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Page Management",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Appsmith Labs": {
							"conditions": [
								{
									"label": "AI",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Knowledge Retrieval",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Workflows Pod": {
							"conditions": [
								{
									"label": "Workflows",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Templates Pod": {
							"conditions": [
								{
									"label": "Templates",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Partial-import-export",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Fork App",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"QA Pod": {
							"conditions": [
								{
									"label": "QA",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Automation Test",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "TestGap",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Automation failures",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Needs automation",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Packages pod": {
							"conditions": [
								{
									"label": "Module creator",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Module consumer",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Package",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Package versioning",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Convert to module",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Query module",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "JS module",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "UI module",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Packages pod",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Anvil POD": {
							"conditions": [
								{
									"label": "Checkbox Component",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS team",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil POD",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - all widgets",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - input widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - paragraph widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - statbox widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - modal widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - icon widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - checkbox widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - table widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - keyValue widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - switch group widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - theming",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil layout",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - theming",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - vertical alignment",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - layout component",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - drag & drop",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - zones & sections",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - copy paste experience",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS  - phone widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - responsive widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - responsive viewport",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS  - widget styling",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - spacing",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil - responsive canvas",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "WDS - inline button widget",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Anvil team",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Activation Pod": {
							"conditions": [
								{
									"label": "Activation",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Stability Pod": {
							"conditions": [
								{
									"label": "Stability Issue",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Enterprise Pod": {
							"conditions": [
								{
									"label": "Move to Postgres",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						},
						"Widgets & Blocks Pod": {
							"conditions": [
								{
									"label": "Building blocks",
									"type": "hasLabel",
									"value": true
								},
								{
									"label": "Widgets & Blocks Pod",
									"type": "hasLabel",
									"value": true
								}
							],
							"requires": 1
						}
					}
				},
				"root": "."
			}
		],
		"labels": {
			"Tab Widget": {
				"color": "e2c76c",
				"name": "Tab Widget",
				"description": ""
			},
			"Dont merge": {
				"color": "ADB39C",
				"name": "Dont merge",
				"description": ""
			},
			"Epic": {
				"color": "3E4B9E",
				"name": "Epic",
				"description": "A zenhub epic that describes a project"
			},
			"Menu Button Widget": {
				"color": "235708",
				"name": "Menu Button Widget",
				"description": "Issues related to Menu Button widget"
			},
			"Checkbox Group widget": {
				"color": "bbeecd",
				"name": "Checkbox Group widget",
				"description": "Issues related to Checkbox Group Widget"
			},
			"Input Widget": {
				"color": "ae65d8",
				"name": "Input Widget",
				"description": ""
			},
			"Security": {
				"color": "99139C",
				"name": "Security",
				"description": ""
			},
			"QA": {
				"color": "",
				"name": "QA",
				"description": "Needs QA attention"
			},
			"Verified": {
				"color": "9bf416",
				"name": "Verified",
				"description": ""
			},
			"Wont Fix": {
				"color": "ffffff",
				"name": "Wont Fix",
				"description": "This will not be worked on"
			},
			"MySQL": {
				"color": "c9ddc6",
				"name": "MySQL",
				"description": "Issues related to MySQL plugin"
			},
			"Development": {
				"color": "9F8A02",
				"name": "Development",
				"description": ""
			},
			"Help Wanted": {
				"color": "008672",
				"name": "Help Wanted",
				"description": "Extra attention is needed"
			},
			"Home Page": {
				"color": "9c0c8e",
				"name": "Home Page",
				"description": "Issues related to the application home page"
			},
			"Rating Widget": {
				"color": "235708",
				"name": "Rating Widget",
				"description": "Issues related to the rating widget"
			},
			"Stat Box Widget": {
				"color": "f1c9ce",
				"name": "Stat Box Widget",
				"description": "Issues related to stat box"
			},
			"Enhancement": {
				"color": "a2eeef",
				"name": "Enhancement",
				"description": "New feature or request"
			},
			"Fork App": {
				"color": "714d2f",
				"name": "Fork App",
				"description": "Issues related to forking apps"
			},
			"Container Widget": {
				"color": "19AD0D",
				"name": "Container Widget",
				"description": "Container widget"
			},
			"Papercut": {
				"color": "B562F6",
				"name": "Papercut",
				"description": ""
			},
			"Needs Design": {
				"color": "bfd4f2",
				"name": "Needs Design",
				"description": "needs design or changes to design"
			},
			"i18n": {
				"color": "1799b0",
				"name": "i18n",
				"description": "Represents issues that need to be tackled to handle internationalization"
			},
			"Rich Text Editor Widget": {
				"color": "f72cac",
				"name": "Rich Text Editor Widget",
				"description": ""
			},
			"Onboarding": {
				"color": "30c76d",
				"name": "Onboarding",
				"description": "Issues related to onboarding new developers"
			},
			"skip-changelog": {
				"color": "06086F",
				"name": "skip-changelog",
				"description": "Adding this label to a PR prevents it from being listed in the changelog"
			},
			"Low": {
				"color": "79e53b",
				"name": "Low",
				"description": "An issue that is neither critical nor breaks a user flow"
			},
			"potential-duplicate": {
				"color": "d3cb2e",
				"name": "potential-duplicate",
				"description": "This label marks issues that are potential duplicates of already open issues"
			},
			"Audio Widget": {
				"color": "447B9A",
				"name": "Audio Widget",
				"description": "Issues related to Audio Widget"
			},
			"Firestore": {
				"color": "8078b0",
				"name": "Firestore",
				"description": "Issues related to the firestore Integration"
			},
			"New Widget": {
				"color": "be4cf2",
				"name": "New Widget",
				"description": "A request for a new widget"
			},
			"Modal Widget": {
				"color": "03846f",
				"name": "Modal Widget",
				"description": ""
			},
			"UX Improvement": {
				"color": "f4a089",
				"name": "UX Improvement",
				"description": ""
			},
			"S3": {
				"color": "8078b0",
				"name": "S3",
				"description": "Issues related to the S3 plugin"
			},
			"Release Blocker": {
				"color": "5756bf",
				"name": "Release Blocker",
				"description": "This issue must be resolved before the release"
			},
			"safari": {
				"color": "51C6AA",
				"name": "safari",
				"description": "Bugs seen on safari browser"
			},
			"Example Apps": {
				"color": "1799b0",
				"name": "Example Apps",
				"description": "Example apps created for new signups"
			},
			"MultiSelect Widget": {
				"color": "AB62D4",
				"name": "MultiSelect Widget",
				"description": "Issues related to MultiSelect Widget"
			},
			"Calendar Widget": {
				"color": "8c6644",
				"name": "Calendar Widget",
				"description": ""
			},
			"Website": {
				"color": "151720",
				"name": "Website",
				"description": "Related to www.appsmith.com website"
			},
			"Low effort": {
				"color": "8B59F0",
				"name": "Low effort",
				"description": "Something that'll take a few days to build"
			},
			"App Viewers Pod": {
				"color": "cd8ef9",
				"name": "App Viewers Pod",
				"description": "This label assigns issues to the app viewers pod"
			},
			"Checkbox Widget": {
				"color": "bbeecd",
				"name": "Checkbox Widget",
				"description": ""
			},
			"Spam": {
				"color": "620faf",
				"name": "Spam",
				"description": ""
			},
			"Voice Recorder Widget": {
				"color": "85bc87",
				"name": "Voice Recorder Widget",
				"description": ""
			},
			"Select Widget": {
				"color": "0c669e",
				"name": "Select Widget",
				"description": "Select or dropdown widget"
			},
			"Bug": {
				"color": "8ba6fd",
				"name": "Bug",
				"description": "Something isn't right"
			},
			"Widget Validation": {
				"color": "6990BC",
				"name": "Widget Validation",
				"description": "Issues related to widget property validation"
			},
			"Generate Page": {
				"color": "30c76d",
				"name": "Generate Page",
				"description": "Issures related to page generation"
			},
			"File Picker Widget": {
				"color": "6ae4f2",
				"name": "File Picker Widget",
				"description": ""
			},
			"snowflake": {
				"color": "8078b0",
				"name": "snowflake",
				"description": "Issues related to the snowflake Integration"
			},
			"Automation": {
				"color": "CCAF60",
				"name": "Automation",
				"description": ""
			},
			"hotfix": {
				"color": "BA3F1D",
				"name": "hotfix",
				"description": ""
			},
			"Team Managers Pod": {
				"color": "bddb81",
				"name": "Team Managers Pod",
				"description": "Issues that team managers care about for the security and efficiency of their teams"
			},
			"Import-Export-App": {
				"color": "15076d",
				"name": "Import-Export-App",
				"description": "Issues related to importing and exporting apps"
			},
			"High effort": {
				"color": "A7E87B",
				"name": "High effort",
				"description": "Something that'll take more than a month to build"
			},
			"Telemetry": {
				"color": "bc70f9",
				"name": "Telemetry",
				"description": "Issues related to instrumenting appsmith"
			},
			"Radio Widget": {
				"color": "91ef15",
				"name": "Radio Widget",
				"description": ""
			},
			"Omnibar": {
				"color": "10b5ce",
				"name": "Omnibar",
				"description": "Issues related to the omnibar for navigation"
			},
			"Button Widget": {
				"color": "34efae",
				"name": "Button Widget",
				"description": ""
			},
			"Switch widget": {
				"color": "33A8CE",
				"name": "Switch widget",
				"description": "The switch widget"
			},
			"Map Widget": {
				"color": "7eef7a",
				"name": "Map Widget",
				"description": ""
			},
			"Task": {
				"color": "085630",
				"name": "Task",
				"description": "A simple Todo"
			},
			"Design System": {
				"color": "2958a4",
				"name": "Design System",
				"description": "Design system"
			},
			"opera": {
				"color": "C63F5B",
				"name": "opera",
				"description": "Any issues identified on the opera browser"
			},
			"Login / Signup": {
				"color": "30c76d",
				"name": "Login / Signup",
				"description": "Authentication flows"
			},
			"Image Widget": {
				"color": "8de8ad",
				"name": "Image Widget",
				"description": ""
			},
			"firefox": {
				"color": "6d56e2",
				"name": "firefox",
				"description": ""
			},
			"Property Pane": {
				"color": "b356ff",
				"name": "Property Pane",
				"description": "Issues related to the behaviour of the property pane"
			},
			"Deployment": {
				"color": "93491f",
				"name": "Deployment",
				"description": "Installation process of appsmith"
			},
			"IDE": {
				"color": "61b2ee",
				"name": "IDE",
				"description": "Issues related to the IDE"
			},
			"Production": {
				"color": "b60205",
				"name": "Production",
				"description": ""
			},
			"Dependencies": {
				"color": "0366d6",
				"name": "Dependencies",
				"description": "Pull requests that update a dependency file"
			},
			"Google Sheets": {
				"color": "8078b0",
				"name": "Google Sheets",
				"description": "Issues related to Google Sheets"
			},
			"Icon Button Widget": {
				"color": "D319CE",
				"name": "Icon Button Widget",
				"description": "Issues related to the icon button widget"
			},
			"Mongo": {
				"color": "8078b0",
				"name": "Mongo",
				"description": "Issues related to Mongo DB plugin"
			},
			"Documentation": {
				"color": "a8dff7",
				"name": "Documentation",
				"description": "Improvements or additions to documentation"
			},
			"TestGap": {
				"color": "",
				"name": "TestGap",
				"description": "Issues identified for test plan improvement"
			},
			"keyboard shortcut": {
				"color": "0688B6",
				"name": "keyboard shortcut",
				"description": ""
			},
			"Git Version Control": {
				"color": "858172",
				"name": "Git Version Control",
				"description": "Issues related to version control"
			},
			"Reopen": {
				"color": "897548",
				"name": "Reopen",
				"description": ""
			},
			"Redshift": {
				"color": "8078b0",
				"name": "Redshift",
				"description": "Issues related to the redshift integration"
			},
			"Date Picker Widget": {
				"color": "ef1ce1",
				"name": "Date Picker Widget",
				"description": ""
			},
			"Entity Explorer": {
				"color": "a2e2f9",
				"name": "Entity Explorer",
				"description": "Issues related to navigation using the entity explorer"
			},
			"JS Linting & Errors": {
				"color": "E56AA5",
				"name": "JS Linting & Errors",
				"description": "Issues related to JS Linting and errors"
			},
			"iFrame": {
				"color": "3CD1DB",
				"name": "iFrame",
				"description": "Issues related to iFrame"
			},
			"Stale": {
				"color": "ededed",
				"name": "Stale",
				"description": null
			},
			"Debugger": {
				"color": "e79062",
				"name": "Debugger",
				"description": "Issues related to the debugger"
			},
			"Text Widget": {
				"color": "d130d1",
				"name": "Text Widget",
				"description": ""
			},
			"Video Widget": {
				"color": "23dd4b",
				"name": "Video Widget",
				"description": ""
			},
			"Datasources": {
				"color": "3d590f",
				"name": "Datasources",
				"description": "Issues related to configuring datasource on appsmith"
			},
			"error": {
				"color": "B66773",
				"name": "error",
				"description": "All issues connected to error messages"
			},
			"Form Widget": {
				"color": "09ed77",
				"name": "Form Widget",
				"description": ""
			},
			"Needs Triaging": {
				"color": "e8b851",
				"name": "Needs Triaging",
				"description": "Needs attention from maintainers to triage"
			},
			"Autocomplete": {
				"color": "235708",
				"name": "Autocomplete",
				"description": "Issues related to the autocomplete"
			},
			"hacktoberfest": {
				"color": "0052cc",
				"name": "hacktoberfest",
				"description": "All issues that can be solved by the community during Hacktoberfest"
			},
			"Medium effort": {
				"color": "D31156",
				"name": "Medium effort",
				"description": "Something that'll take more than a week but less than a month to build"
			},
			"Release": {
				"color": "57e5e0",
				"name": "Release",
				"description": ""
			},
			"High": {
				"color": "c94d14",
				"name": "High",
				"description": "This issue blocks a user from building or impacts a lot of users"
			},
			"UI Performance": {
				"color": "1799b0",
				"name": "UI Performance",
				"description": "Issues related to UI performance"
			},
			"UI Builders Pod": {
				"color": "517fba",
				"name": "UI Builders Pod",
				"description": "Issues that UI Builders face using appsmith"
			},
			"Deploy Preview": {
				"color": "bfdadc",
				"name": "Deploy Preview",
				"description": "Issues found in Deploy Preview"
			},
			"Needs Tests": {
				"color": "8ee263",
				"name": "Needs Tests",
				"description": "Needs automated tests to assert a feature/bug fix"
			},
			"Refactor": {
				"color": "B96662",
				"name": "Refactor",
				"description": "needs refactoring of code"
			},
			"Divider Widget": {
				"color": "235708",
				"name": "Divider Widget",
				"description": "Issues related to the divider widget"
			},
			"Table Widget": {
				"color": "2eead1",
				"name": "Table Widget",
				"description": ""
			},
			"Needs More Info": {
				"color": "e54c10",
				"name": "Needs More Info",
				"description": "Needs additional information"
			},
			"Good First Issue": {
				"color": "7057ff",
				"name": "Good First Issue",
				"description": "Good for newcomers"
			},
			"UI Improvement": {
				"color": "9aeef4",
				"name": "UI Improvement",
				"description": ""
			},
			"Backend": {
				"color": "d4c5f9",
				"name": "Backend",
				"description": "This marks the issue or pull request to reference server code"
			},
			"Frontend": {
				"color": "87c7f2",
				"name": "Frontend",
				"description": "This label marks the issue or pull request to reference client code"
			},
			"In App Comms": {
				"name": "In App Comms",
				"description": "Issues around communication with appsmith instances",
				"color": "463cca"
			},
			"Chart Widget": {
				"color": "616ecc",
				"name": "Chart Widget",
				"description": ""
			},
			"List Widget": {
				"color": "8508A0",
				"name": "List Widget",
				"description": "Issues related to the list widget"
			},
			"Duplicate": {
				"color": "cfd3d7",
				"name": "Duplicate",
				"description": "This issue or pull request already exists"
			},
			"JS Snippets": {
				"color": "8d62d2",
				"name": "JS Snippets",
				"description": "issues related to JS Snippets"
			},
			"Copy Paste": {
				"name": "Copy Paste",
				"description": "Issues related to copy paste",
				"color": "b4f0a9"
			},
			"Drag & Drop": {
				"name": "Drag & Drop",
				"description": "Issues related to the drag & drop experience",
				"color": "92115a"
			},
			"BE Coders Pod": {
				"color": "5d9848",
				"name": "BE Coders Pod",
				"description": "Issues related to users writing code to fetch and update data"
			},
			"FE Coders Pod": {
				"color": "a7effc",
				"name": "FE Coders Pod",
				"description": "Issues related to users writing javascript in appsmith"
			},
			"New Developers Pod": {
				"color": "6310da",
				"name": "New Developers Pod",
				"description": "Issues that new developers face while exploring the IDE"
			},
			"Sniping Mode": {
				"name": "Sniping Mode",
				"description": "Issues related to sniping mode",
				"color": "30c76d"
			},
			"Redis": {
				"name": "Redis",
				"description": "Issues related to Redis",
				"color": "8078b0"
			},
			"New Datasource": {
				"color": "60b14c",
				"name": "New Datasource",
				"description": "Requests for new datasources"
			},
			"Evaluated Value": {
				"name": "Evaluated Value",
				"description": "Issues related to evaluated values",
				"color": "39f6e7"
			},
			"Undo/Redo": {
				"name": "Undo/Redo",
				"description": "Issues related to undo/redo",
				"color": "f25880"
			},
			"App Navigation": {
				"name": "App Navigation",
				"description": "Issues related to the topbar navigation and configuring it",
				"color": "4773ab"
			},
			"Widgets Pane": {
				"name": "Widgets Pane",
				"description": "Issues related to the discovery and organisation of widgets",
				"color": "ad5d78"
			},
			"View Mode": {
				"color": "1799b0",
				"name": "View Mode",
				"description": "Issues related to the view mode"
			},
			"User Education Pod": {
				"name": "User Education Pod",
				"description": "Issues related to user education",
				"color": "1799b0"
			},
			"Content": {
				"name": "Content",
				"description": "For content related topics i.e blogs, templates, videos",
				"color": "a8dff7"
			},
			"Embedding Apps": {
				"name": "Embedding Apps",
				"description": "Issues related to embedding",
				"color": "30c76d"
			},
			"Slash Command": {
				"name": "Slash Command",
				"description": "Issues related to the slash command",
				"color": "a0608e"
			},
			"Widget Property": {
				"name": "Widget Property",
				"description": "Issues related to adding / modifying widget properties across widgets",
				"color": "5e92cb"
			},
			"Windows": {
				"name": "Windows",
				"description": "Issues related exclusively to Windows systems",
				"color": "b4cb8a"
			},
			"Old App Issues": {
				"name": "Old App Issues",
				"description": "Issues related to apps old apps a few weeks old and app issues in stale browser session",
				"color": "87ab18"
			},
			"Document Viewer Widget": {
				"name": "Document Viewer Widget",
				"description": "Issues related to Document Viewer Widget",
				"color": "899d4b"
			},
			"Radio Group Widget": {
				"name": "Radio Group Widget",
				"description": "Issues related to radio group widget",
				"color": "b68495"
			},
			"Super Admin": {
				"name": "Super Admin",
				"description": "Issues related to the super admin page",
				"color": "aa95cf"
			},
			"Postgres": {
				"name": "Postgres",
				"description": "Postgres related issues",
				"color": "8078b0"
			},
			"New JS Function": {
				"name": "New JS Function",
				"description": "Issues related to adding a JS Function",
				"color": "8e8aa4"
			},
			"Cannot Reproduce Issue": {
				"color": "93c9cc",
				"name": "Cannot Reproduce Issue",
				"description": "Issues that cannot be reproduced"
			},
			"Widget Grouping": {
				"name": "Widget Grouping",
				"description": "Issues related to Widget Grouping",
				"color": "a49951"
			},
			"K8s": {
				"name": "K8s",
				"description": "Kubernetes related issues",
				"color": "5f318a"
			},
			"Docker": {
				"name": "Docker",
				"description": "Issues related to docker",
				"color": "89b808"
			},
			"Camera Widget": {
				"name": "Camera Widget",
				"description": "Issues and enhancements related to camera widget",
				"color": "e6038e"
			},
			"SAAS Plugins": {
				"name": "SAAS Plugins",
				"description": "Issues related to SAAS Plugins",
				"color": "80e18f"
			},
			"JS Promises": {
				"name": "JS Promises",
				"description": "Issues related to promises",
				"color": "d7771f"
			},
			"OnPageLoad": {
				"name": "OnPageLoad",
				"description": "OnPageLoad issues on functions and queries",
				"color": "50559d"
			},
			"JS Usability": {
				"name": "JS Usability",
				"description": "usability issues with JS editor and JS elsewhere",
				"color": "a302b0"
			},
			"Currency Input Widget": {
				"name": "Currency Input Widget",
				"description": "Issues related to currency input widget",
				"color": "b2164f"
			},
			"TreeSelect": {
				"name": "TreeSelect",
				"description": "Issues related to TreeSelect Widget",
				"color": "a1633e"
			},
			"MultiTree Select Widget": {
				"name": "MultiTree Select Widget",
				"description": "Issues related to MultiTree Select Widget",
				"color": "a1633e"
			},
			"Welcome Screen": {
				"name": "Welcome Screen",
				"description": "Issues related to the welcome screen",
				"color": "30c76d"
			},
			"Realtime Commenting": {
				"color": "a70b86",
				"name": "Realtime Commenting",
				"description": "In-app communication between teams"
			},
			"Phone Input Widget": {
				"name": "Phone Input Widget",
				"description": "Issues related to the Phone Input widget",
				"color": "a70b86"
			},
			"JSON Form": {
				"name": "JSON Form",
				"description": "Issue / features related to the JSON form wiget",
				"color": "46b209"
			},
			"All Widgets": {
				"name": "All Widgets",
				"description": "Issues related to all widgets",
				"color": "972b36"
			},
			"V1": {
				"name": "V1",
				"description": "V1",
				"color": "67ab2e"
			},
			"Reflow & Resize": {
				"name": "Reflow & Resize",
				"description": "All issues related to reflow and resize experience",
				"color": "748a13"
			},
			"App Theming": {
				"name": "App Theming",
				"description": "Items that are related to the App level theming controls epic",
				"color": "5e0904"
			},
			"SSO": {
				"name": "SSO",
				"description": "Issues, requests and enhancements around Single sign-on.",
				"color": "bf019b"
			},
			"Multi User Realtime": {
				"name": "Multi User Realtime",
				"description": "Issues related to multiple users using or editing an application",
				"color": "e7b6ce"
			},
			"Templates": {
				"name": "Templates",
				"description": "Issues related to templates",
				"color": "b893f6"
			},
			"Ready for design": {
				"name": "Ready for design",
				"description": "this issue is ready for design: it contains clear problem statements and other required information",
				"color": "ebf442"
			},
			"Support": {
				"name": "Support",
				"description": "Issues created by the A-force team to address user queries",
				"color": "1740f3"
			},
			"Button Group widget": {
				"name": "Button Group widget",
				"description": "Issue and enhancements related to the button group widget",
				"color": "f17025"
			},
			"GraphQL Plugin": {
				"name": "GraphQL Plugin",
				"description": "Issues related to GraphQL plugin",
				"color": "8078b0"
			},
			"DevOps Pod": {
				"name": "DevOps Pod",
				"description": "Issues related to devops",
				"color": "d956c7"
			},
			"medium": {
				"name": "medium",
				"description": "Issues that frustrate users due to poor UX",
				"color": "23dfd9"
			},
			"ArangoDB": {
				"name": "ArangoDB",
				"description": "Issues related to arangoDB",
				"color": "8078b0"
			},
			"Code Refactoring": {
				"name": "Code Refactoring",
				"description": "Issues related to code refactoring",
				"color": "76310e"
			},
			"Progress bar widget": {
				"name": "Progress bar widget",
				"description": "To track issues related to progress bar",
				"color": "2d7abf"
			},
			"Audio Recorder Widget": {
				"name": "Audio Recorder Widget",
				"description": "Issues related to Audio Recorder Widget",
				"color": "9accef"
			},
			"Airtable": {
				"name": "Airtable",
				"description": "Issues for Airtable",
				"color": "60885f"
			},
			"RBAC": {
				"name": "RBAC",
				"description": "Issues, requests and enhancements around RBAC.",
				"color": "9211c3"
			},
			"Canvas / Grid": {
				"name": "Canvas / Grid",
				"description": "Issues related to the canvas",
				"color": "16b092"
			},
			"Email Config": {
				"name": "Email Config",
				"description": "Issues related to configuring the email service",
				"color": "2a21d1"
			},
			"CURL": {
				"name": "CURL",
				"description": "Issues related to CURL impor",
				"color": "60885f"
			},
			"Canvas Zooms": {
				"name": "Canvas Zooms",
				"description": "Issues related to zooming the canvas",
				"color": "e6038e"
			},
			"business": {
				"name": "business",
				"description": "Features that will be a part of our business edition",
				"color": "cd59eb"
			},
			"Action Pod": {
				"name": "Action Pod",
				"description": "",
				"color": "ee2e36"
			},
			"AutomationGap1": {
				"color": "a5e07c",
				"name": "AutomationGap1",
				"description": "Issues that needs automated tests"
			},
			"A-Force11": {
				"name": "A-Force11",
				"description": "Issues raised by A-Force team",
				"color": "d667b6"
			},
			"Business Edition": {
				"name": "Business Edition",
				"description": "Features that will be a part of our business edition",
				"color": "89bb6c"
			},
			"storeValue": {
				"name": "storeValue",
				"description": "Issues related to the store value function",
				"color": "5d3e66"
			},
			"DynamoDB": {
				"name": "DynamoDB",
				"description": "Issues that are related to DynamoDB should have this label",
				"color": "60885f"
			},
			"Design System Pod": {
				"name": "Design System Pod",
				"description": "Appsmith design system related issues",
				"color": "706f03"
			},
			"ABAC": {
				"color": "e009a5",
				"name": "ABAC",
				"description": "User permissions and access controls"
			},
			"Backup & Restore": {
				"name": "Backup & Restore",
				"description": "Issues related to backup and restore",
				"color": "86874d"
			},
			"Billing": {
				"name": "Billing",
				"description": "Billing infrastructure and flows for Business Edition and Trial users",
				"color": "d2bc40"
			},
			"Datatype issue": {
				"name": "Datatype issue",
				"description": "Issues that have risen because data types weren't handled",
				"color": "cef66b"
			},
			"OAuth": {
				"name": "OAuth",
				"description": "OAuth related bugs or features",
				"color": "60885f"
			},
			"Table Widget V2": {
				"name": "Table Widget V2",
				"description": "Issues related to Table Widget V2",
				"color": "3a7192"
			},
			"IDE Navigation": {
				"name": "IDE Navigation",
				"description": "Issues/feature requests related to IDE navigation, and context switching",
				"color": "bc0cba"
			},
			"Query performance": {
				"name": "Query performance",
				"description": "Issues that have to do with lack in performance of query execution",
				"color": "cef66b"
			},
			"SAAS Manager App": {
				"name": "SAAS Manager App",
				"description": "Issues with the SAAS manager app",
				"color": "d427db"
			},
			"Twilio": {
				"name": "Twilio",
				"description": "Issues related to Twilio integration",
				"color": "23ba8d"
			},
			"Hubspot": {
				"name": "Hubspot",
				"description": "Issues related to Hubspot integration",
				"color": "60885f"
			},
			"Zendesk": {
				"name": "Zendesk",
				"description": "Issues related to Zendesk integration",
				"color": "60885f"
			},
			"Entity Refactor": {
				"name": "Entity Refactor",
				"description": "Issues related to refactor logic",
				"color": "705a2c"
			},
			"Branding": {
				"name": "Branding",
				"description": "All issues under branding and whitelabelling appsmith ecosystem",
				"color": "7aaaf1"
			},
			"Map Chart Widget": {
				"name": "Map Chart Widget",
				"description": "Issues related to Map Chart Widgets",
				"color": "c8397f"
			},
			"Product Catchup": {
				"name": "Product Catchup",
				"description": "Issues created in the product catchup",
				"color": "29cd2c"
			},
			"Framework Functions": {
				"name": "Framework Functions",
				"description": "Issues related to internal functions like showAlert(), navigateTo() etc...",
				"color": "c25a09"
			},
			"Frontend Libraries Upgrade": {
				"name": "Frontend Libraries Upgrade",
				"description": "Issues related to frontend libraries upgrade",
				"color": "ede1fc"
			},
			"Audit Logs": {
				"name": "Audit Logs",
				"description": "Audit trails to ensure data security",
				"color": "f3fd62"
			},
			"MsSQL": {
				"name": "MsSQL",
				"description": "Issues related to MsSQL plugin",
				"color": "8078b0"
			},
			"Data Platform Pod": {
				"name": "Data Platform Pod",
				"description": "Issues related to the underlying data platform",
				"color": "3f8c3a"
			},
			"Integrations Pod": {
				"name": "Integrations Pod",
				"description": "Issues related to a specific integration",
				"color": "5dbbb1"
			},
			"Datasource Environments": {
				"name": "Datasource Environments",
				"description": "Issues related to datasource environments",
				"color": "bae511"
			},
			"Elastic Search": {
				"name": "Elastic Search",
				"description": "Issues related to the elastic search datasource",
				"color": "8078b0"
			},
			"Core Query Execution": {
				"color": "cef66b",
				"name": "Core Query Execution",
				"description": "Issues related to the execution of all queries"
			},
			"Query Management": {
				"name": "Query Management",
				"description": "Issues related to the CRUD of actions or queries",
				"color": "cef66b"
			},
			"Query Settings": {
				"name": "Query Settings",
				"description": "Issues related to the settings of all queries",
				"color": "cef66b"
			},
			"Code Editor": {
				"name": "Code Editor",
				"description": "Issues related to the code editor",
				"color": "4ca16e"
			},
			"Query Forms": {
				"color": "12b253",
				"name": "Query Forms",
				"description": "Isuses related to the query forms"
			},
			"JS Objects": {
				"color": "22962c",
				"name": "JS Objects",
				"description": "Issues related to JS Objects"
			},
			"JS Evaluation": {
				"color": "22962c",
				"name": "JS Evaluation",
				"description": "Issues related to JS evaluation on the platform"
			},
			"SmartSubstitution": {
				"name": "SmartSubstitution",
				"description": "Issues related to Smart substitution of mustache bindings in queries",
				"color": "bae511"
			},
			"Query Generation": {
				"name": "Query Generation",
				"description": "Issues related to query generation",
				"color": "cef66b"
			},
			"Suggested Widgets": {
				"name": "Suggested Widgets",
				"description": "Issues related to suggesting widgets based on query response",
				"color": "6ac063"
			},
			"Page load executions": {
				"name": "Page load executions",
				"description": "Issues related to page load execution",
				"color": "5696b2"
			},
			"Code Scanner Widget": {
				"name": "Code Scanner Widget",
				"description": "Issues related to code scanner widget",
				"color": "9bc1a0"
			},
			"Clean URLs": {
				"name": "Clean URLs",
				"description": "Issues related to clean URLs epic",
				"color": "112623"
			},
			"Widget keyboard accessibility": {
				"name": "Widget keyboard accessibility",
				"description": "All issues related to keyboard accessibility in widgets",
				"color": "b626fd"
			},
			"Connection pool": {
				"name": "Connection pool",
				"description": "issues to do with connection pooling of various plugins",
				"color": "94fe36"
			},
			"List Widget V2": {
				"name": "List Widget V2",
				"description": "Issues related to the list widget v2",
				"color": "adaaf7"
			},
			"Auto Height": {
				"name": "Auto Height",
				"description": "Issues related to dynamic height of widgets",
				"color": "5149cf"
			},
			"cypress_failed_test": {
				"name": "cypress_failed_test",
				"description": "Cypress failed tests",
				"color": "4745d5"
			},
			"Needs validation": {
				"name": "Needs validation",
				"description": "Needs problem validation before being picked up",
				"color": "66673d"
			},
			"Slider Widget": {
				"name": "Slider Widget",
				"description": "Issues raised for slider widgets.",
				"color": "2eef5f"
			},
			"Multitenancy": {
				"name": "Multitenancy",
				"description": "Support multitenancy within single appsmith instance",
				"color": "8c49a9"
			},
			"Git Pod": {
				"name": "Git Pod",
				"description": "Anything related to git sync",
				"color": "2e5ba4"
			},
			"Mobile Pod": {
				"name": "Mobile Pod",
				"description": "All issues related to mobile responsiveness",
				"color": "6c97fd"
			},
			"Conversion Algorithm": {
				"name": "Conversion Algorithm",
				"description": "All issue related to converting app from fixed to flex mode & vice versa",
				"color": "d12d2e"
			},
			"Browser specific": {
				"name": "Browser specific",
				"description": "All issue related to browser",
				"color": "d12d2e"
			},
			"Error Handling": {
				"name": "Error Handling",
				"description": "Issues related to error handling",
				"color": "4e1872"
			},
			"Performance infra": {
				"name": "Performance infra",
				"description": "all issue related to the performance infra",
				"color": "8a60f6"
			},
			"DSL Update": {
				"name": "DSL Update",
				"description": "Issues related to storing and updating the DSL",
				"color": "e16cf3"
			},
			"AST-frontend": {
				"name": "AST-frontend",
				"description": "Issues related to maintaining AST logic",
				"color": "196a6b"
			},
			"AST-backend": {
				"name": "AST-backend",
				"description": "Backend issues related to AST parsing",
				"color": "196a6b"
			},
			"MariaDB": {
				"name": "MariaDB",
				"description": "MariaDB datasource",
				"color": "8428c3"
			},
			"Billing & Usage Pod": {
				"name": "Billing & Usage Pod",
				"description": "Issues pertaining to licensing, billing, usage across self serve and enterprise customers",
				"color": "256808"
			},
			"ADS Component Issue": {
				"name": "ADS Component Issue",
				"description": "Issues which are caused due to ADS components",
				"color": "d89119"
			},
			"Regressed": {
				"color": "723fd0",
				"name": "Regressed",
				"description": "Scenarios that were working before but have now regressed"
			},
			"Needs RCA": {
				"name": "Needs RCA",
				"description": "a critical or high priority issue that needs an RCA",
				"color": "2cc68f"
			},
			"Custom JS Libraries": {
				"name": "Custom JS Libraries",
				"description": "Issues related to adding custom JS library",
				"color": "bacb6d"
			},
			"Integrations Pod General": {
				"name": "Integrations Pod General",
				"description": "Issues related to the Integrations Pod that don't fit into other tags.",
				"color": "287823"
			},
			"Performance Pod": {
				"name": "Performance Pod",
				"description": "All things related to Appsmith performance",
				"color": "b5a25d"
			},
			"Performance": {
				"name": "Performance",
				"description": "Issues related to performance",
				"color": "9a18d7"
			},
			"File upload issues": {
				"name": "File upload issues",
				"description": "Issues related to uploading any type of files from within Appsmith",
				"color": "8154df"
			},
			"Action Selector": {
				"name": "Action Selector",
				"description": "Issues related to action selector on the property pane",
				"color": "2f9e20"
			},
			"Community Reported": {
				"name": "Community Reported",
				"description": "issues reported by community members",
				"color": "1402e5"
			},
			"JS Function execution": {
				"name": "JS Function execution",
				"description": "JS function execution",
				"color": "7c2de1"
			},
			"Self Serve": {
				"name": "Self Serve",
				"description": "For all issues related to self-serve flow for business edition",
				"color": "4dacfc"
			},
			"Self Serve 1.0": {
				"name": "Self Serve 1.0",
				"description": "For all issues related to v1 of the self serve project",
				"color": "ae839e"
			},
			"CE Instance": {
				"name": "CE Instance",
				"description": "For all issues relating to usage, licensing or billing on the CE instance",
				"color": "d2bc40"
			},
			"Customer Portal": {
				"name": "Customer Portal",
				"description": "For all tasks/issues pertaining to customer.appsmith.com",
				"color": "d2bc40"
			},
			"Cloud Services": {
				"name": "Cloud Services",
				"description": "For all tasks/issues on Appsmith cloud-services relating to licensing, usage and billing",
				"color": "d2bc40"
			},
			"Billing Integrations": {
				"name": "Billing Integrations",
				"description": "For all issues relating to 3P integrations Appsmith is using for billing & usage",
				"color": "d2bc40"
			},
			"One-click Binding": {
				"name": "One-click Binding",
				"description": "Issues related to the One click binding epic",
				"color": "f1661c"
			},
			"Airgap": {
				"name": "Airgap",
				"description": "Tickets related to supporting air-gapped Appsmith instances",
				"color": "1cb294"
			},
			"SMTP plugin": {
				"name": "SMTP plugin",
				"description": "Issues related to SMTP plugin",
				"color": "541457"
			},
			"AWS AMI": {
				"name": "AWS AMI",
				"description": "Issues Related to AWS AMI",
				"color": "b44680"
			},
			"Old widget version": {
				"name": "Old widget version",
				"description": "Use this label to raise issue specific only to an older version of a widget",
				"color": "ff3814"
			},
			"Enterprise Billing": {
				"name": "Enterprise Billing",
				"description": "To track all tasks/issues related to licensing & billing for enterprise customers",
				"color": "14c156"
			},
			"Appsmith Business Cloud": {
				"name": "Appsmith Business Cloud",
				"description": "Issues related to our business cloud offering",
				"color": "89bb6c"
			},
			"Oracle SQL DB": {
				"name": "Oracle SQL DB",
				"description": "Issues related to the Oracle plugin",
				"color": "cbabcb"
			},
			"Community Contributor": {
				"name": "Community Contributor",
				"description": "Meant to track issues that are assigned to external contributors",
				"color": "149ab6"
			},
			"widget vertical alignment": {
				"name": "widget vertical alignment",
				"description": "All issue related widget vertical alignment on the auto layout canvas",
				"color": "d12d2e"
			},
			"Observability": {
				"name": "Observability",
				"description": "Issues related to observability on the Appsmith instance",
				"color": "dff913"
			},
			"Checkbox Component": {
				"name": "Checkbox Component",
				"description": "This labels deals with checkbox component in wds package",
				"color": "75a401"
			},
			"In-app ramps": {
				"name": "In-app ramps",
				"description": "For all tasks/issues relating to adding in-app ramps in the community edition of the product",
				"color": "8abae0"
			},
			"Analytics Improvements": {
				"name": "Analytics Improvements",
				"description": "For all tasks focused on improving our overall analytics and fixing any issues ",
				"color": "29b8ed"
			},
			"WDS team": {
				"name": "WDS team",
				"description": "",
				"color": "8d675a"
			},
			"Enterprise Edition": {
				"name": "Enterprise Edition",
				"description": "Features that will be supported in Enterprise Edition only",
				"color": "984f5e"
			},
			"Query filter": {
				"name": "Query filter",
				"description": "Issues related to query filtering, e.g., WHERE clause",
				"color": "a15134"
			},
			"Keyboard accessibility ": {
				"name": "Keyboard accessibility ",
				"description": "All issue related to ADS component keyboard accessibility",
				"color": "2ba696"
			},
			"Toggle button": {
				"name": "Toggle button",
				"description": "All issue related to ADS toggle button",
				"color": "edc47f"
			},
			"Feature Flagging": {
				"name": "Feature Flagging",
				"description": "Anything related feature flagging",
				"color": "8d8a09"
			},
			"SCIM": {
				"name": "SCIM",
				"description": "Label to collate our SCIM issues",
				"color": "61a852"
			},
			"ADS Category Token": {
				"name": "ADS Category Token",
				"description": "All issues related appsmith design system category tokens",
				"color": "920961"
			},
			"ADS Component Documentation": {
				"name": "ADS Component Documentation",
				"description": "All issues Appsmith design system component documentation",
				"color": "64c46a"
			},
			"ADS Migration": {
				"name": "ADS Migration",
				"description": "All issues related to Appsmith design system migration",
				"color": "b082d6"
			},
			"ADS Deduplication ": {
				"name": "ADS Deduplication ",
				"description": "Replacing component with ADS components",
				"color": "b082d6"
			},
			"ADS Revamp": {
				"name": "ADS Revamp",
				"description": "All issues related to ads revamp. ",
				"color": "b082d6"
			},
			"ADS Deduplication": {
				"name": "ADS Deduplication",
				"description": "Replacing component with ADS components",
				"color": "b082d6"
			},
			"ADS Grayscale": {
				"name": "ADS Grayscale",
				"description": "Support grayscale color changes",
				"color": "b03577"
			},
			"ADS Unit Test": {
				"name": "ADS Unit Test",
				"description": "All issue related ads unit cases ",
				"color": "b082d6"
			},
			"ADS Components": {
				"name": "ADS Components",
				"description": "All issues related ADS components",
				"color": "b082d6"
			},
			"Widget Discoverability": {
				"name": "Widget Discoverability",
				"description": "Issues related to Widget Discoverability",
				"color": "7b55ce"
			},
			"Widget setter method": {
				"name": "Widget setter method",
				"description": "Issues with widget property setters",
				"color": "8dce87"
			},
			"License": {
				"name": "License",
				"description": "For all issues/tasks related to licensing of appsmith-ee edition",
				"color": "90ee98"
			},
			"DocumentDB": {
				"name": "DocumentDB",
				"description": "Issues related to support DocumentDB in Appsmith Data layer",
				"color": "2c8b56"
			},
			"Multiple Environments": {
				"name": "Multiple Environments",
				"description": "Issues or tasks related to multiple environments",
				"color": "bae511"
			},
			"Platformization": {
				"name": "Platformization",
				"description": "Issues or tasks related to platformization of Appsmith codebase",
				"color": "4e972b"
			},
			"Activation - datasources": {
				"name": "Activation - datasources",
				"description": "issues related to activation projects",
				"color": "7c7ace"
			},
			"Partial-import-export": {
				"name": "Partial-import-export",
				"description": "Label for granular reusability.",
				"color": "717732"
			},
			"AI": {
				"name": "AI",
				"description": "All tasks related to AI",
				"color": "75c4ce"
			},
			"Custom environments": {
				"name": "Custom environments",
				"description": "Issues with creating or working with custom environments",
				"color": "bae511"
			},
			"ADS Typography": {
				"name": "ADS Typography",
				"description": "All issue related typographical changes",
				"color": "2dbe8d"
			},
			"Auto Layout": {
				"name": "Auto Layout",
				"description": "Issues relates to auto layout",
				"color": "92cf8c"
			},
			"Heroku": {
				"name": "Heroku",
				"description": "Issues related to Heroku",
				"color": "a81b69"
			},
			"ADS Visual Styles": {
				"name": "ADS Visual Styles",
				"description": "All issues related to ADS visual styles",
				"color": "d3da89"
			},
			"ADS Component Design": {
				"name": "ADS Component Design",
				"description": "All issue related to component design",
				"color": "5cc91e"
			},
			"Modal Component": {
				"name": "Modal Component",
				"description": "All issue related to ads modal component",
				"color": "ee63f3"
			},
			"App setting": {
				"name": "App setting",
				"description": "Related to app settings panel within the app",
				"color": "144206"
			},
			"BE instance": {
				"name": "BE instance",
				"description": "For all issues related to license, billing on BE instance",
				"color": "ae8f98"
			},
			"Schema": {
				"name": "Schema",
				"description": "Issues related to database schema",
				"color": "af939e"
			},
			"Fixed layout": {
				"name": "Fixed layout",
				"description": "issues related to fixed layout",
				"color": "b66681"
			},
			"Anvil layout": {
				"name": "Anvil layout",
				"description": "issues related to the new layout system anvil",
				"color": "5e0904"
			},
			"New Deployment Mode": {
				"name": "New Deployment Mode",
				"description": "Support a new mode of deployment",
				"color": "108033"
			},
			"Custom widgets": {
				"name": "Custom widgets",
				"description": "For all issues related to the custom widget project",
				"color": "c9db9c"
			},
			"IDE Pod": {
				"name": "IDE Pod",
				"description": "https://app.zenhub.com/workspaces/new-developers-pod-60507ad1d4b98d00150a2858/board",
				"color": "d3d248"
			},
			"TM_BU": {
				"name": "TM_BU",
				"description": "The issues on Team Manager which needs to be taken up by Billing & Usage",
				"color": "198cdf"
			},
			"Homepage Experience V2": {
				"name": "Homepage Experience V2",
				"description": "Label for reporting new tasks and bug fixes related to revamped homepage experience",
				"color": "c55d54"
			},
			"Appsmith Labs": {
				"name": "Appsmith Labs",
				"description": "All things related to AI and other new initiatives ",
				"color": "712d51"
			},
			"Customer Success": {
				"name": "Customer Success",
				"description": "Issues that the success team cares about",
				"color": "6ccabd"
			},
			"Invite flow": {
				"name": "Invite flow",
				"description": "Invite users flow and any associated actions",
				"color": "881b35"
			},
			"Invite users": {
				"name": "Invite users",
				"description": "Invite users flow and any associated actions",
				"color": "23e6d6"
			},
			"Workflows Pod": {
				"name": "Workflows Pod",
				"description": "For all issues related to the Workflows feature",
				"color": "a86802"
			},
			"DailyPromotionBlocker": {
				"name": "DailyPromotionBlocker",
				"description": "DailyPromotion Blocker",
				"color": "9b2280"
			},
			"JS Binding": {
				"name": "JS Binding",
				"description": "All issues related to the JS Binding experience",
				"color": "422fed"
			},
			"Knowledge Retrieval": {
				"name": "Knowledge Retrieval",
				"description": "All issues related to knowledge retrieval on Appsmith AI",
				"color": "a36890"
			},
			"REST API": {
				"name": "REST API",
				"description": "REST API plugin related issues",
				"color": "e3ede5"
			},
			"1-click upgrade": {
				"name": "1-click upgrade",
				"description": "For all issues/tasks related to 1-click upgrade & downgrade project",
				"color": "51b5ff"
			},
			"Activation - learnability": {
				"name": "Activation - learnability",
				"description": "Activation - learnability",
				"color": "96fc76"
			},
			"Critical": {
				"color": "a1e3db",
				"name": "Critical",
				"description": "This issue breaks existing apps. Drop everything else to resolve"
			},
			"Module creator": {
				"name": "Module creator",
				"description": "Issues related to the module creator side",
				"color": "bb2c05"
			},
			"Module consumer": {
				"name": "Module consumer",
				"description": "Issues related to the module consumer side",
				"color": "83d3c5"
			},
			"Package": {
				"name": "Package",
				"description": "Issues related to packages",
				"color": "2ad485"
			},
			"Package versioning": {
				"name": "Package versioning",
				"description": "ISsues related to how we manage versions for packages",
				"color": "4c5218"
			},
			"Convert to module": {
				"name": "Convert to module",
				"description": "Issues related to the module creation flow using conversion",
				"color": "4c5218"
			},
			"Query module": {
				"name": "Query module",
				"description": "Issues affecting query modules or its instances",
				"color": "b11a7e"
			},
			"JS module": {
				"name": "JS module",
				"description": "Issues affecting JS modules or its instances",
				"color": "bf76f6"
			},
			"Templates Pod": {
				"name": "Templates Pod",
				"description": "Issues related to Templates",
				"color": "e7b3b9"
			},
			"Secret Management": {
				"name": "Secret Management",
				"description": "Issues related to secret management",
				"color": "cce8e7"
			},
			"REST API plugin": {
				"name": "REST API plugin",
				"description": "REST API plugin related issues",
				"color": "b5948a"
			},
			"UI module": {
				"name": "UI module",
				"description": "Issues affecting UI modules or its instances",
				"color": "d2acee"
			},
			"Preview mode": {
				"name": "Preview mode",
				"description": "Issues related to app previews",
				"color": "3fb8f2"
			},
			"Git Auto-commit": {
				"name": "Git Auto-commit",
				"description": "Issues related to autocommit",
				"color": "717732"
			},
			"QA Pod": {
				"name": "QA Pod",
				"description": "Issues under the QA Pod",
				"color": "717732"
			},
			"Automation Test": {
				"name": "Automation Test",
				"description": "",
				"color": ""
			},
			"Automation failures": {
				"name": "Automation failures",
				"description": "",
				"color": ""
			},
			"Needs automation": {
				"name": "Needs automation",
				"description": "Issues that needs automated tests",
				"color": ""
			},
			"Prepared statements": {
				"name": "Prepared statements",
				"description": "Issues related to prepared statement flow",
				"color": ""
			},
			"Switch Group Widget": {
				"name": "Switch Group Widget",
				"description": "Issues related to Switch group Widget",
				"color": ""
			},
			"Supervisor": {
				"name": "Supervisor",
				"description": "Issues related to supervisor",
				"color": "2c5813"
			},
			"Deployment Certificates": {
				"name": "Deployment Certificates",
				"description": "Issues related to lets encrypt",
				"color": "e148aa"
			},
			"Mock Data": {
				"name": "Mock Data",
				"description": "Issues related to mock databases",
				"color": "ebf251"
			},
			"AWS ECS": {
				"name": "AWS ECS",
				"description": "Issues related to ECS Fargate",
				"color": "e506ff"
			},
			"Publish App": {
				"name": "Publish App",
				"description": "Issues related to app deployment",
				"color": ""
			},
			"IDE Infra": {
				"name": "IDE Infra",
				"description": "Issues related to the IDE infrastructure like saving changes",
				"color": "4c1858"
			},
			"User Profile": {
				"name": "User Profile",
				"description": "Issues related to a user profile",
				"color": "a60d34"
			},
			"Admin Settings": {
				"color": "32a316",
				"name": "Admin Settings",
				"description": "Issues related to admin settings"
			},
			"Workspace settings": {
				"name": "Workspace settings",
				"description": "Issues related to workspace settings",
				"color": "47d1ad"
			},
			"Page Management": {
				"color": "e17a68",
				"name": "Page Management",
				"description": "Issues related to configuring pages"
			},
			"Ingress": {
				"name": "Ingress",
				"description": "Ingress Controller",
				"color": "a86802"
			},
			"Nginx": {
				"name": "Nginx",
				"description": "Issues related to Nginx",
				"color": "e54195"
			},
			"Workflows": {
				"name": "Workflows",
				"description": "",
				"color": "1b89db"
			},
			"Building blocks": {
				"name": "Building blocks",
				"description": "Building blocks on cavas, on templates listing or drag and drop of building blocks.",
				"color": "3b163e"
			},
			"Table Inline Edit": {
				"name": "Table Inline Edit",
				"description": "Issues related to inline editing",
				"color": "60895a"
			},
			"User Session ": {
				"name": "User Session ",
				"description": "For all issues/tasks related to user sessions",
				"color": "65a3f5"
			},
			"Packages pod": {
				"name": "Packages pod",
				"description": "issues that belong to the packages pod",
				"color": "423772"
			},
			"WDS - all widgets": {
				"name": "WDS - all widgets",
				"description": "all widget present in WDS",
				"color": "2670ae"
			},
			"WDS - input widget": {
				"name": "WDS - input widget",
				"description": "Issues related to input widget on WDS",
				"color": "2670ae"
			},
			"WDS - paragraph widget": {
				"name": "WDS - paragraph widget",
				"description": "issues related to paragraph widget on WDS",
				"color": "2670ae"
			},
			"WDS - statbox widget": {
				"name": "WDS - statbox widget",
				"description": "issues related to statbox widget on WDS",
				"color": "2670ae"
			},
			"WDS - modal widget": {
				"name": "WDS - modal widget",
				"description": "Issues related to modal widget on WDS",
				"color": "2670ae"
			},
			"WDS - icon widget": {
				"name": "WDS - icon widget",
				"description": "Issues related to icon widget on WDS",
				"color": "2670ae"
			},
			"WDS - checkbox widget": {
				"name": "WDS - checkbox widget",
				"description": "Issues related to checkbox widget on WDS",
				"color": "2670ae"
			},
			"WDS - table widget": {
				"name": "WDS - table widget",
				"description": "Issues related to table widget on WDS",
				"color": "2670ae"
			},
			"WDS - keyValue widget": {
				"name": "WDS - keyValue widget",
				"description": "Issues related to key-value widget on WDS",
				"color": "2670ae"
			},
			"WDS - switch group widget": {
				"name": "WDS - switch group widget",
				"description": "Issues related to switch group widget on WDS",
				"color": "2670ae"
			},
			"WDS - theming": {
				"name": "WDS - theming",
				"description": "Issues related to theming on the Anvil instance",
				"color": "2670ae"
			},
			"Anvil POD": {
				"name": "Anvil POD",
				"description": "Issue related to Anvil project",
				"color": "5e0904"
			},
			"Anvil - theming": {
				"name": "Anvil - theming",
				"description": "Issues related to theming on the Anvil instance",
				"color": "c28de5"
			},
			"Anvil - vertical alignment": {
				"name": "Anvil - vertical alignment",
				"description": "Issues related to vertical alignment on the Anvil layout",
				"color": "c28de5"
			},
			"Anvil - layout component": {
				"name": "Anvil - layout component",
				"description": "Issues related to layout component on the Anvil layout",
				"color": "c28de5"
			},
			"Anvil - drag & drop": {
				"name": "Anvil - drag & drop",
				"description": "Issues related to drag & drop experience on Anvil",
				"color": "c28de5"
			},
			"Anvil - zones & sections": {
				"name": "Anvil - zones & sections",
				"description": "Issues related to zones and sections on the Anvil layout",
				"color": "c28de5"
			},
			"Anvil - copy paste experience": {
				"name": "Anvil - copy paste experience",
				"description": "Issues related to copy paste experience on the Anvil layout",
				"color": "c28de5"
			},
			"WDS  - phone widget": {
				"name": "WDS  - phone widget",
				"description": "Issues related to phone widget on WDS",
				"color": "c28de5"
			},
			"WDS - responsive widget": {
				"name": "WDS - responsive widget",
				"description": "All issues related to widget responsiveness",
				"color": "11ee05"
			},
			"Anvil - responsive viewport": {
				"color": "11ee05",
				"name": "Anvil - responsive viewport",
				"description": "Issues seen on different viewports like mobile"
			},
			"WDS  - widget styling": {
				"color": "11ee05",
				"name": "WDS  - widget styling",
				"description": "all about widget styling"
			},
			"Anvil - spacing": {
				"name": "Anvil - spacing",
				"description": "Related to spacing between widgets in auto layout",
				"color": "11ee05"
			},
			"Anvil - responsive canvas": {
				"name": "Anvil - responsive canvas",
				"description": "All issues related to canvas responsiveness",
				"color": "11ee05"
			},
			"WDS - inline button widget": {
				"name": "WDS - inline button widget",
				"description": "Issues related to inline button widget on WDS",
				"color": "7cef83"
			},
			"Activation Pod": {
				"name": "Activation Pod",
				"description": "for Activation group",
				"color": "d67d00"
			},
			"Activation": {
				"name": "Activation",
				"description": "for Activation group",
				"color": "d67d00"
			},
			"Tests": {
				"name": "Tests",
				"description": "Test issues",
				"color": "4fc7b6"
			},
			"Ballpark: XXS": {
				"name": "Ballpark: XXS",
				"description": "~1xDev in 1/2xSprint",
				"color": ""
			},
			"Ballpark: XS": {
				"name": "Ballpark: XS",
				"description": "~1xDev in 1xSprint",
				"color": "53bf71"
			},
			"Ballpark: S": {
				"name": "Ballpark: S",
				"description": "~2xDev in 1xSprint",
				"color": "6e9e65"
			},
			"Ballpark: M": {
				"name": "Ballpark: M",
				"description": "~1xPOD in 1xSprint",
				"color": "2229e6"
			},
			"Ballpark: L": {
				"name": "Ballpark: L",
				"description": "~1xPOD in 3xSprint or 2xPODs in 1xSprint",
				"color": "49962f"
			},
			"Ballpark: XL": {
				"name": "Ballpark: XL",
				"description": "~1xPOD in 1xQuarter or 2xPODs in 2xSprint",
				"color": "b524c9"
			},
			"Ballpark: XXL": {
				"name": "Ballpark: XXL",
				"description": "~2xPODs in 1xQuarter",
				"color": "22092c"
			},
			"Auto-commit": {
				"name": "Auto-commit",
				"description": "Issues related to auto-generated commits showing up on git ",
				"color": "e25b89"
			},
			"Continuous Deployment": {
				"name": "Continuous Deployment",
				"description": "Issues related to CD pipeline on git",
				"color": "aea47c"
			},
			"Branch protection": {
				"name": "Branch protection",
				"description": "Issues related to using a protected branch on git",
				"color": "ab511a"
			},
			"Default branch": {
				"name": "Default branch",
				"description": "Issues related to using a default branch on git",
				"color": "195737"
			},
			"Git status": {
				"name": "Git status",
				"description": "Issues related to information shown on git status modal or number of changes appearing in a branch",
				"color": "c851b8"
			},
			"Git performance": {
				"name": "Git performance",
				"description": "Issues related to perceived performance on any git operation",
				"color": "189af6"
			},
			"Anvil team": {
				"name": "Anvil team",
				"description": "issues related to the new layout system anvil",
				"color": "798200"
			},
			"SDLC": {
				"name": "SDLC",
				"description": "Issues related to software development lifecycle experiences",
				"color": "bae511"
			},
			"Reconnect DS modal": {
				"name": "Reconnect DS modal",
				"description": "Issues related to reconnect datasource modal post app import",
				"color": "2e398b"
			},
			"Stability Pod": {
				"name": "Stability Pod",
				"description": "For all issues/tasks to be prioritized under Stability pod",
				"color": "86ddf6"
			},
			"Stability Issue": {
				"name": "Stability Issue",
				"description": "Every issue handle by Stability Pod",
				"color": "4d024a"
			},
			"Enterprise Pod": {
				"name": "Enterprise Pod",
				"description": "Pod to handle enhancements and bugs from enterprise customers ",
				"color": "3f4784"
			},
			"Move to Postgres": {
				"name": "Move to Postgres",
				"description": "Issues required to be solved for the move to Postgres as repository layer",
				"color": "4e13ac"
			},
			"User Session": {
				"name": "User Session",
				"description": "Issues related to user sessions",
				"color": "8255e5"
			},
			"IDE tabs": {
				"name": "IDE tabs",
				"description": "query and js tabs",
				"color": "13ba96"
			},
			"Inviting Contribution": {
				"name": "Inviting Contribution",
				"description": "Issues that we would like contributions to",
				"color": ""
			}
		},
		"success": true
	}
}