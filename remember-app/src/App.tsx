import { useEffect, useState } from "react";
import { Textarea, Button, Group, List } from "@mantine/core";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconArrowRight } from "@tabler/icons-react";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";

let nextId = 0;

type Memory = {
  code: string;
  title: string;
  date?: Date;
};

function App() {
  //const [memoryForm, setMemoryForm] = useState<Memory>();
  const [items, setItems] = useState<Memory[]>([]);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      inputRemember: "",
    },
    validate: {
      inputRemember: (value) =>
        value.length < 2 ? "Write at leat 2 chars" : null,
    },
  });

  const onFormSubmit = function (values: any) {
    //e.preventDefault();
    console.log(values);

    let mem: Memory = {
      code: "",
      title: values.inputRemember,
      date: new Date(),
    };

    items.push(mem);
    setMemoryForm(mem);

    fetch(
      "https://paytently-dev.outsystemsenterprise.com/Tiago_Memoir_API/rest/Memoir/Memory",
      {
        method: "POST",
        body: JSON.stringify(mem),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  };

  useEffect(() => {
    fetch(
      "https://paytently-dev.outsystemsenterprise.com/Tiago_Memoir_API/rest/Memoir/GetList_Memory"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const memories = data.map((dataItem: any) => {
          let newMemories: Memory = {
            code: dataItem.Code,
            title: dataItem.Title,
            date: dataItem.Date,
          };
          return newMemories;
        });
        setItems(memories);
      });
  }, []);

  return (
    <>
      <form onSubmit={form.onSubmit(onFormSubmit)}>
        <Textarea
          label="What to remember"
          placeholder="What to remember"
          key={form.key("inputRemember")}
          //value={memoryForm?.title}
          {...form.getInputProps("inputRemember")}
        />
        <DatePicker
          key={form.key("datePickerRemember")}
          defaultDate={new Date()}
          //value={memoryForm?.date}
          {...form.getInputProps("datePickerRemember")}
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
        {items.map((item: Memory) => (
          <List.Item key={item.code}>{item.title}</List.Item>
        ))}
      </List>
    </>
  );
}

export default App;
