import { useEffect, useState } from "react";
import "@mantine/core/styles.css";
import { Textarea, Button, Group, List } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconArrowRight } from "@tabler/icons-react";

let nextId = 0;

type Memory = {
  id: number;
  title: string;
};

function App() {
  const [memoryForm, setmemoryForm] = useState<Memory>();
  const [items, setItems] = useState<Memory[]>([]);

  const handleRememberChange = (e: { target: { value: string } }) => {
    let mem: Memory = {
      id: 0,
      title: e.target.value,
    };

    setmemoryForm({ ...memoryForm, mem });
  };

  /*
  const handleDateChange = (e: { target: { value: any } }) => {
    setRemForm({ ...remForm, date: e.target.value });
  };
  */
  const rememberItems = items.map((item: Memory) => (
    <List.Item key={item.id}>{item.title}</List.Item>
  ));

  const form = useForm({
    mode: "controlled",
    initialValues: {
      inputRemember: "",
    },

    validate: {
      inputRemember: (value) =>
        value.length < 2 ? "Write at leat 2 chars" : null,
    },
  });

  useEffect(() => {
    fetch(
      "https://paytently-dev.outsystemsenterprise.com/Tiago_Memoir_API/rest/Memoir/GetList_Memory"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  return (
    <>
      <form
        onSubmit={form.onSubmit(function (values) {
          //e.preventDefault();
          console.log(values);

          let mem: Memory = { id: nextId++, title: values.inputRemember };
          items.push(mem);
          setRemForm(mem);

          fetch(
            "https://paytently-dev.outsystemsenterprise.com/Tiago_Memoir_API/rest/Memoir/Memory",
            {
              method: "POST",
              body: JSON.stringify({
                Date: "2024-12-31",
                Title: values.inputRemember,
                Description: "",
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          );
        })}
      >
        <Textarea
          label="What to remember"
          placeholder="What to remember"
          key={form.key("inputRemember")}
          value={remForm.title}
          onChange={handleRememberChange}
          {...form.getInputProps("inputRemember")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>

      <List
        spacing="xs"
        size="sm"
        center
        icon={<IconArrowRight style={{ width: 16, height: 16 }} />}
      >
        {rememberItems}
      </List>
    </>
  );
}

export default App;
