import { useEffect, useState } from "react";
import "@mantine/core/styles.css";
import { Textarea, Button, Group, List } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconArrowRight } from "@tabler/icons-react";

let nextId = 0;

function App() {
  const [remForm, setRemForm] = useState({
    id: 0,
    remember: "",
    date: null,
  });
  const [items, setItems] = useState([]);

  const handleRememberChange = (e) => {
    setRemForm({ ...remForm, remember: e.target.value });
  };
  const handleDateChange = (e) => {
    setRemForm({ ...remForm, date: e.target.value });
  };

  const rememberItems = items.map((item) => (
    <List.Item key={item.Code}>
      {" "}
      {item.Title} at {item.Date}{" "}
    </List.Item>
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
          items.push({
            id: nextId++,
            remember: values.inputRemember,
          });

          setRemForm({ id: 0, remember: "", date: null });

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
          value={remForm.remember}
          onChange={handleRememberChange}
          {...form.getInputProps("inputRemember")}
        />

        <DatePickerInput
          label="Pick date"
          placeholder="Pick date"
          key={form.key("date")}
          value={remForm.date}
          onChange={handleDateChange}
          {...form.getInputProps("date")}
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
