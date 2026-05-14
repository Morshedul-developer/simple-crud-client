"use client";
import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";

const UsersTable = ({ users, deleteUserAction }) => {
  const handleDelete = async (userId) => {
    await deleteUserAction(userId);
  };
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Team members"
          className="min-w-150 text-center"
        >
          <Table.Header>
            <Table.Column className="text-center" isRowHeader>
              Name
            </Table.Column>
            <Table.Column className="text-center">Role</Table.Column>
            <Table.Column className="text-center">Email</Table.Column>
            <Table.Column className="text-center">Status</Table.Column>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell className="flex gap-2 justify-center">
                  <Link href={`/users/${user._id}`}>
                    <Button variant="outline">Outline</Button>
                  </Link>
                  <Link href={`/users/${user._id}/edit`}>
                    <Button variant="outline">Edit</Button>
                  </Link>
                  {/* delete button */}
                  <AlertDialog>
                    <Button variant="danger">Delete</Button>
                    <AlertDialog.Backdrop>
                      <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                          <AlertDialog.CloseTrigger />
                          <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                              Delete user permanently?
                            </AlertDialog.Heading>
                          </AlertDialog.Header>
                          <AlertDialog.Body>
                            <p>
                              This will permanently delete{" "}
                              <strong>{user.name}</strong> and all of its data.
                              This action cannot be undone.
                            </p>
                          </AlertDialog.Body>
                          <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                              Cancel
                            </Button>
                            <Button
                              onClick={() => handleDelete(user._id)}
                              slot="close"
                              variant="danger"
                            >
                              Permanently Delete
                            </Button>
                          </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                      </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                  </AlertDialog>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UsersTable;
