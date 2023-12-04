using CashDrawer.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CashDrawer.Models.Entities
{
    public class CashTable
    {
        public CashTable(string anno)
        {
            Anno = anno;
            Stipendio = 0;
            EntrateExtra = 0;
            TotaleRisparmio = 0;
            Cassa = 0;
            Emergenze = 0;
            Programmato = 0;
            Altro = 0;
            ContoComune = 0;
            ContoWeekend = 0;
            SpeseMensili = 0;
            SpeseAnnuali = 0;
            UsciteExtra = 0;
            Rimanenza = 0;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        [Required]
        public string Anno { get; set; }
        public Mesi Mesi { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float Stipendio { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float EntrateExtra { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float TotaleRisparmio { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float Cassa { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float Emergenze { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float Programmato { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float Altro { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float ContoComune { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float ContoWeekend { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float SpeseMensili { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float SpeseAnnuali { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float UsciteExtra { get; set; }

        [Range(0, float.MaxValue)]
        [DataType(DataType.Currency)]
        public float Rimanenza { get; set; }
    }
}
