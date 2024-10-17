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
  const [items, setItems] = useState<Memory[]>([]);

  const form = useForm<Memory>({
    mode: "controlled",
    initialValues: { code: "", title: "", date: new Date() },
  });

  const onFormSubmit = function (formSubmittedValues: Memory) {
    //e.preventDefault();
    console.log(formSubmittedValues);

    let mem: Memory = {
      code: "",
      title: formSubmittedValues.title,
      date: formSubmittedValues.date,
    };

    items.push(mem);
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
          {...form.getInputProps("title")}
          label="What to remember"
          placeholder="What to remember"
        />
        <DatePickerInput
          {...form.getInputProps("date")}
          label="Pick date"
          placeholder="Pick date"
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
