import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

type HabitFields = {
    name: string;
    startDate: string;
    description: string;
};

export default function HabitCard(props: { props: HabitFields }) {
    const { name, startDate, description } = props.props;
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                >
                    {startDate}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
        </Card>
    );
}
