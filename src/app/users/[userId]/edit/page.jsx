import { Button, Input, Label, TextField } from "@heroui/react";

const UserUpdatePage = () => {
  return (
    <div className="px-20 pt-5 space-y-10">
      <h2 className="text-4xl font-bold text-center">User Update</h2>
      <form className="flex flex-col gap-4 max-w-1/2 mx-auto border px-6 py-10 rounded-2xl">
        <TextField className="w-full" name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter user name" />
        </TextField>
        <TextField className="w-full" name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="Enter user email" />
        </TextField>
        <TextField className="w-full" name="role" type="tel">
          <Label>Role</Label>
          <Input placeholder="Enter user role" />
        </TextField>
          <div className="flex gap-2">
            <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" slot="close">
            Create User
          </Button>
          </div>
      </form>
    </div>
  );
};

export default UserUpdatePage;
