import csv
import os

# Step 1: Create a list of tenants and tasks
tenants = ['Tenant 1', 'Tenant 2', 'Tenant 3', 'Tenant 4', 'Tenant 5', 'Tenant 6', 'Tenant 7', 'Tenant 8', 'Tenant 9', 'Tenant 10', 'Tenant 11', 'Tenant 12', 'Tenant 13']
tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6', 'Task 7', 'Task 8', 'Task 9', 'Task 10', 'Task 11', 'Task 12', 'Task 13']

# Step 2: Initialize a 2D array to represent the task table
task_table = [[-1 for j in range(13)] for i in range(13)]

# Step 3: Initialize a variable to keep track of the current week
current_week = 1

# Step 4: Initialize a list of tenants
tenant_list = tenants.copy()

# Step 5: Iterate through each week in a year (52 weeks)
for week in range(1, 53):
    # Step 6: Open a new CSV file for the current week
    # if tasks dir does not exist, create it
    if not os.path.exists('./tasks'):
        os.makedirs('./tasks')
    filename = f'./tasks/task_table_week_{week}.csv'

    with open(filename, 'w', newline='') as csvfile:
        csv_writer = csv.writer(csvfile)
        csv_writer.writerow(['Tenant', 'Task'])
        # Step 7: Iterate through each task
        for task_index, task in enumerate(tasks):
            # Step 8: Get the current tenant from the list and update the list
            current_tenant = tenant_list.pop(0)
            tenant_list.append(current_tenant)
            # Step 9: Update the task table
            task_table[tenants.index(current_tenant)][task_index] = week
            # Step 10: Write the current task assignment to the CSV file
            csv_writer.writerow([current_tenant, task])
